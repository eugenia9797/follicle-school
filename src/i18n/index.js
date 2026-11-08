// 中英雙語的網址規則：中文維持原本的網址，英文版放在 /en/ 底下、路徑一一對應。
// 例如 /about/ ⇄ /en/about/、/follicle-school/quiz/ ⇄ /en/follicle-school/quiz/。
import { UI } from './ui.js';

export const LANGS = ['zh', 'en'];
export const DEFAULT_LANG = 'zh';

// <html lang>、hreflang 用的語言代碼
export const HTML_LANG = { zh: 'zh-Hant-TW', en: 'en' };
// og:locale
export const OG_LOCALE = { zh: 'zh_TW', en: 'en_US' };

const EN_PREFIX = /^\/en(?=\/|$)/;

/** Which language a page is in, read from its path. */
export function langFromPath(pathname) {
  return EN_PREFIX.test(pathname) ? 'en' : 'zh';
}

/** Shorthand for components: the language of the page being rendered. */
export function pageLang(Astro) {
  return langFromPath(Astro.url.pathname);
}

/** The path with any /en prefix removed — the Chinese URL of the same page. */
export function basePath(pathname) {
  const stripped = pathname.replace(EN_PREFIX, '');
  return stripped === '' ? '/' : stripped;
}

/**
 * Point a site-internal link at the given language. External links, mail
 * links and bare #anchors are returned untouched, so a nav list can mix them.
 */
export function localize(href, lang) {
  if (lang !== 'en' || typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) {
    return href;
  }
  if (EN_PREFIX.test(href)) return href;
  return href === '/' ? '/en/' : `/en${href}`;
}

/** Both language versions of the current page. */
export function alternates(pathname) {
  const zh = basePath(pathname);
  return { zh, en: localize(zh, 'en') };
}

/** The UI strings for a language. */
export function t(lang) {
  return UI[lang] ?? UI[DEFAULT_LANG];
}
