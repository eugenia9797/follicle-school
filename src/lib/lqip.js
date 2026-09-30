import lqip from '../data/lqip.json';

/**
 * 圖片載入前的模糊預覽（LQIP）。
 *
 * tools/make-lqip.mjs 會把每張圖縮成 24px 寬、模糊後存成 base64，以「原始檔名
 * （不含副檔名）」為 key。Astro 產出的檔名會保留原始檔名開頭
 * （hero-rosacea.CGNkGjZ0_2vHxMX.webp），開發模式則是 /@fs/…/hero-rosacea.webp?…，
 * 兩種都能還原出同一個 key。
 */
function keyFrom(src) {
  if (!src) return null;
  const file = String(src).split('?')[0].split('/').pop();
  return file ? file.split('.')[0] : null;
}

export function lqipFor(image) {
  if (!image) return null;
  const key = keyFrom(typeof image === 'string' ? image : image.src);
  return (key && lqip[key]) || null;
}

/**
 * 直接放進 <img style> 的宣告。
 *
 * 關鍵在於：背景畫在 <img> 元素自己身上。圖片還沒載完時瀏覽器會畫這張模糊的
 * 背景，載完之後真正的圖片就直接蓋在上面 —— 不需要任何 JavaScript 來切換，
 * 也不會有「先一片空白」的狀態。
 */
export function lqipStyle(image, fit = 'cover') {
  const uri = lqipFor(image);
  return uri ? `background-image:url(${uri});background-size:${fit};` : '';
}
