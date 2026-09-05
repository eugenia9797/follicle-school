import manifest from '../data/slot-manifest.json';
import overrides from '../data/slot-overrides.json';

// Every image that came out of the Claude Design export. Eager-globbing them
// lets `getSlot` resolve an id to a processed asset at build time.
const files = import.meta.glob('../assets/**/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  import: 'default',
});

// slot-manifest.json is regenerated wholesale by tools/import-design-export.py,
// so artwork supplied outside Claude Design lives in slot-overrides.json and is
// layered on top. An override always wins: it is the deliberate choice. Delete
// its entry if the design later carries the picture you want instead.
const slots = { ...manifest, ...overrides };

/**
 * Resolve an `<image-slot>` id to its image.
 *
 * Returns `null` for slots that were left empty in the design — callers render
 * a placeholder frame in that case.
 */
export function getSlot(id) {
  const entry = slots[id];
  if (!entry) return null;
  const image = files[`../assets/${entry.file}`];
  if (!image) return null;
  return {
    image,
    optimize: entry.optimize === true,
    s: entry.s ?? 1,
    x: entry.x ?? 0,
    y: entry.y ?? 0,
  };
}

/**
 * The design runtime stores a slot's pan/zoom as a scale plus offsets given in
 * percent of the frame. Sizing the `<img>` to the frame and applying
 * `translate() scale()` on top of `object-fit` reproduces that exactly: the
 * scale is about the image's own centre, and a percentage translate resolves
 * against the image box, which is the frame.
 */
export function slotTransform(slot) {
  if (!slot) return null;
  const parts = [];
  if (slot.x !== 0 || slot.y !== 0) parts.push(`translate(${slot.x}%, ${slot.y}%)`);
  if (slot.s !== 1) parts.push(`scale(${slot.s})`);
  return parts.length ? parts.join(' ') : null;
}
