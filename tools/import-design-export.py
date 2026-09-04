#!/usr/bin/env python3
"""Re-import a Claude Design export into this Astro project.

Usage:
    python3 tools/import-design-export.py ~/Downloads/皮膚科落髮衛教網站.zip

What it does:
  1. Unpacks the export to a temp dir.
  2. Copies `TreatmentData.js` verbatim to `src/data/`.
  3. Copies the source images from `assets/` to `src/assets/`.
  4. Decodes every base64 image out of `.image-slots.state.json` into
     `src/assets/slots/`, dropping slots nothing in the site references and
     de-duplicating identical payloads.
  5. Writes `src/data/slot-manifest.json` — the id -> file/size/pan-zoom map
     that `src/lib/slots.js` reads.

The Design runtime files (`support.js`, `image-slot.js`) are editor-only and
are deliberately not imported.
"""
from __future__ import annotations

import base64
import hashlib
import json
import re
import shutil
import struct
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC_DATA = ROOT / "src" / "data"
SRC_ASSETS = ROOT / "src" / "assets"
SLOT_DIR = SRC_ASSETS / "slots"

# Source images that ship at full resolution and get resized by Astro's <Image>.
FULL_RES_ASSETS = [
    "logo.png",
    "icon-aga.jpg",
    "icon-aga-female-result.jpg",
    "icon-areata.jpg",
    "icon-quiz.jpg",
    "icon-telogen.jpg",
    "male-mechanism.png",
    "mascot-walk.png",
    "exam-pulltest.jpeg",
    "exam-dermoscopy.jpeg",
    "exam-bloodtest.jpeg",
]

# Slots whose full-resolution original lives in assets/ — the design runtime
# stores a downscaled webp copy, so prefer the original and let Astro resize.
SLOT_FULL_RES_SOURCE = {"male-mechanism": "male-mechanism.png"}


def webp_size(b: bytes):
    """(width, height) for a VP8 / VP8L / VP8X webp buffer."""
    if b[:4] != b"RIFF" or b[8:12] != b"WEBP":
        return None
    pos = 12
    while pos + 8 <= len(b):
        fourcc, size = b[pos:pos + 4], struct.unpack("<I", b[pos + 4:pos + 8])[0]
        payload = b[pos + 8:pos + 8 + size]
        if fourcc == b"VP8X":
            return (1 + int.from_bytes(payload[4:7], "little"),
                    1 + int.from_bytes(payload[7:10], "little"))
        if fourcc == b"VP8 ":
            return (struct.unpack("<H", payload[6:8])[0] & 0x3FFF,
                    struct.unpack("<H", payload[8:10])[0] & 0x3FFF)
        if fourcc == b"VP8L":
            bits = int.from_bytes(payload[1:5], "little")
            return ((bits & 0x3FFF) + 1, ((bits >> 14) & 0x3FFF) + 1)
        pos += 8 + size + (size & 1)
    return None


def referenced_slot_ids(treatment_data: Path) -> set[str]:
    """Ask Node which slot ids the site actually renders, straight from the data module."""
    js = f"""
import * as D from {json.dumps(str(treatment_data))};
const used = new Set([
  'male-mechanism', 'norwood-overview', 'male-derm-1', 'male-derm-2', 'male-derm-3',
  'female-mechanism', 'female-mechanism-2', 'ludwig-overview',
  'female-derm-1', 'female-derm-2', 'female-derm-3'
]);
for (const st of D.NORWOOD_STAGES) {{
  used.add('norwood-stage-' + st.id);
  if (st.id === 'III') used.add('norwood-stage-III-vertex');
}}
for (const st of D.FEMALE_STAGES) used.add('ludwig-stage-' + st.id);
for (const cats of [D.getMaleCategories(), D.getFemaleCategories()]) {{
  for (const c of cats) for (const t of c.treatments) {{
    const hidden = !!t.hideProduct || ['prp', 'prp-f', 'exosome', 'exosome-f'].includes(t.id);
    if (hidden || t.notAvailableTW) continue;
    if (t.brands && t.brands.length) t.brands.forEach((_, i) => used.add(t.id + '-' + i));
    else used.add(t.id + '-photo');
  }}
}}
console.log(JSON.stringify([...used]));
"""
    with tempfile.NamedTemporaryFile("w", suffix=".mjs", delete=False, encoding="utf-8") as f:
        f.write(js)
        tmp = f.name
    try:
        out = subprocess.run(["node", tmp], capture_output=True, text=True, check=True)
        return set(json.loads(out.stdout))
    finally:
        Path(tmp).unlink(missing_ok=True)


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    archive = Path(sys.argv[1]).expanduser()
    if not archive.exists():
        print(f"error: {archive} not found")
        return 1

    with tempfile.TemporaryDirectory() as tmpdir:
        work = Path(tmpdir)
        with zipfile.ZipFile(archive) as z:
            z.extractall(work)

        data_js = work / "TreatmentData.js"
        state_json = work / ".image-slots.state.json"
        for required in (data_js, state_json):
            if not required.exists():
                print(f"error: export is missing {required.name}")
                return 1

        SRC_DATA.mkdir(parents=True, exist_ok=True)
        SLOT_DIR.mkdir(parents=True, exist_ok=True)
        shutil.copy2(data_js, SRC_DATA / "TreatmentData.js")
        print(f"data   TreatmentData.js ({data_js.stat().st_size / 1024:.1f} KB)")

        for name in FULL_RES_ASSETS:
            src = work / "assets" / name
            if src.exists():
                shutil.copy2(src, SRC_ASSETS / name)
                print(f"asset  {name} ({src.stat().st_size / 1024:.0f} KB)")
            else:
                print(f"warn   assets/{name} missing from export")

        used = referenced_slot_ids(SRC_DATA / "TreatmentData.js")
        state = json.loads(state_json.read_text(encoding="utf-8"))

        for stale in SLOT_DIR.glob("*"):
            stale.unlink()

        by_hash: dict[str, str] = {}
        manifest: dict[str, dict] = {}
        skipped = 0

        for slot_id, view in sorted(state.items()):
            if slot_id not in used:
                skipped += 1
                continue
            m = re.match(r"^data:image/(\w+);base64,(.*)$", view.get("u") or "", re.S)
            if not m:
                continue
            ext, raw = m.group(1), base64.b64decode(m.group(2))
            digest = hashlib.sha256(raw).hexdigest()[:16]
            filename = by_hash.get(digest)
            if filename is None:
                filename = f"{slot_id}.{ext}"
                (SLOT_DIR / filename).write_bytes(raw)
                by_hash[digest] = filename
            dims = webp_size(raw) if ext == "webp" else None
            entry = {
                "file": f"slots/{filename}",
                "width": dims[0] if dims else None,
                "height": dims[1] if dims else None,
            }
            if slot_id in SLOT_FULL_RES_SOURCE:
                entry["file"] = SLOT_FULL_RES_SOURCE[slot_id]
                entry["optimize"] = True
                entry["width"] = entry["height"] = None
            for key, default in (("s", 1), ("x", 0), ("y", 0)):
                if view.get(key, default) != default:
                    entry[key] = view[key]
            manifest[slot_id] = entry

        empty = sorted(used - set(manifest))
        (SRC_DATA / "slot-manifest.json").write_text(
            json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
            encoding="utf-8",
        )

        total = sum(p.stat().st_size for p in SLOT_DIR.iterdir())
        print(f"slots  {len(manifest)} referenced -> {len(by_hash)} files, "
              f"{total / 1024 / 1024:.2f} MB ({skipped} unreferenced slots dropped)")
        if empty:
            print(f"empty  {len(empty)} slot(s) render as placeholders: {', '.join(empty)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
