// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages exposes the deployment URL as CF_PAGES_URL. Preview
// deployments get a per-commit hostname, so canonical/sitemap URLs follow the
// deployment they were built for instead of pointing at production.
const site = process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://follicle-school.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  // The coming-soon placeholders carry no real content, so they stay out of
  // the sitemap (they are also marked noindex).
  integrations: [sitemap({ filter: (page) => !page.includes('/coming-soon/') })],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
