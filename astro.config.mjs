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
  integrations: [sitemap()],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
