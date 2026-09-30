/**
 * 產生每張圖片的「超低解析模糊預覽」(LQIP)，寫進 src/data/lqip.json。
 *
 * 作法：把圖片縮到 24px 寬、先模糊再輸出成 webp，轉成 base64 data URI。
 * 每張只有幾百 bytes，直接內嵌進 HTML 當作 <img> 的 background-image；
 * 真正的圖片載完之後會蓋在上面，所以不需要任何 JavaScript 來切換。
 *
 * 用法：node tools/make-lqip.mjs
 */
import { readdir, writeFile, stat } from 'node:fs/promises';
import { join, extname, basename, relative } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const DIRS = ['src/assets', 'public/articles'];
const EXT = new Set(['.webp', '.png', '.jpg', '.jpeg', '.avif']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (EXT.has(extname(entry.name).toLowerCase())) yield p;
  }
}

const map = {};
let bytes = 0;
for (const dir of DIRS) {
  try { await stat(join(ROOT, dir)); } catch { continue; }
  for await (const file of walk(join(ROOT, dir))) {
    const buf = await sharp(file)
      .resize({ width: 24, withoutEnlargement: true })
      .blur(1.2)
      .webp({ quality: 40, alphaQuality: 40 })
      .toBuffer();
    // 以檔名（去掉副檔名）當 key：Astro 產出的檔名會保留原始檔名開頭
    const key = basename(file, extname(file));
    map[key] = `data:image/webp;base64,${buf.toString('base64')}`;
    bytes += buf.length;
  }
}

const out = join(ROOT, 'src/data/lqip.json');
await writeFile(out, JSON.stringify(map, null, 0) + '\n', 'utf8');
console.log(`${Object.keys(map).length} 張圖 → ${relative(ROOT, out)}`);
console.log(`平均每張 ${Math.round(bytes / Object.keys(map).length)} bytes，全部合計 ${(bytes / 1024).toFixed(0)} KB`);
