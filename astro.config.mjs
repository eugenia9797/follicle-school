// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const PRODUCTION_URL = 'https://follicle-school.pages.dev';
const PRODUCTION_BRANCH = 'main';

// CF_PAGES_URL is the per-deployment hostname (https://<hash>.<project>.pages.dev)
// on production builds too, so it can only stand in for preview branches —
// using it in production would move the canonical URL on every deploy.
// Set SITE_URL in the Cloudflare dashboard once a custom domain is attached.
const branch = process.env.CF_PAGES_BRANCH;
const site =
  process.env.SITE_URL ||
  (branch && branch !== PRODUCTION_BRANCH ? process.env.CF_PAGES_URL : PRODUCTION_URL);

export default defineConfig({
  site,
  output: 'static',
  // The coming-soon placeholders carry no real content, so they stay out of
  // the sitemap (they are also marked noindex).
  integrations: [sitemap({ filter: (page) => !page.includes('/coming-soon/') })],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
