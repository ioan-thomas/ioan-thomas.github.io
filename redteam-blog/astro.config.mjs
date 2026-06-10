// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ─────────────────────────────────────────────────────────────
// GitHub Pages settings — edit these two lines:
//
// 1. USER/ORG SITE  (repo named  <username>.github.io):
//      site: 'https://<username>.github.io'   and DELETE the `base` line.
//
// 2. PROJECT SITE   (repo named anything else, e.g. `blog`):
//      site: 'https://<username>.github.io'
//      base: '/<repo-name>'
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https:/ioan-thomas.github.io',
  // base: '/your-repo-name',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
  },
});
