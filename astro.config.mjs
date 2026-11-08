// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const PRODUCTION_URL = 'https://esheen.skin';
const PRODUCTION_BRANCH = 'main';

// CF_PAGES_URL is the per-deployment hostname (https://<hash>.<project>.pages.dev)
// on production builds too, so it can only stand in for preview branches —
// using it in production would move the canonical URL on every deploy.
const branch = process.env.CF_PAGES_BRANCH;
const site =
  process.env.SITE_URL ||
  (branch && branch !== PRODUCTION_BRANCH ? process.env.CF_PAGES_URL : PRODUCTION_URL);

export default defineConfig({
  site,
  output: 'static',
  // English pages live under /en/ and mirror the Chinese paths; the sitemap
  // links each page to its other-language version.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: { zh: 'zh-Hant-TW', en: 'en' },
      },
    }),
  ],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
