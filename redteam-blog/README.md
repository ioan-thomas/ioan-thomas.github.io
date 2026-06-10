# Offensive Security Blog / Portfolio

Personal blog and portfolio built with [Astro](https://astro.build), styled like an engagement dossier. Deploys to GitHub Pages automatically on every push.

## Quick start

```bash
npm install
npm run dev        # local preview at http://localhost:4321
```

## Make it yours (5 minutes)

1. **`src/consts.ts`** — your name, role, certs, focus areas, links and projects all live in this one file.
2. **`astro.config.mjs`** — set `site` to your GitHub Pages URL. If the repo is **not** named `<username>.github.io`, also uncomment `base` and set it to `/<repo-name>`.
3. Delete or edit the two sample posts in `src/content/blog/`.

## Adding a blog post

Create a markdown file in `src/content/blog/`. The filename becomes the URL slug.

```markdown
---
title: 'Kerberos relaying notes'
description: 'One-line summary shown in lists and search results.'
pubDate: 2026-07-01
tags: ['active-directory', 'lab']
draft: false        # set true to hide from the live site
---

Your content here. Code blocks, tables and images all work.
```

Commit, push, done — the GitHub Action builds and deploys automatically. Images go in `public/` and are referenced as `/image.png` (or `/<repo-name>/image.png` for project sites).

## Deploying to GitHub Pages (one-time setup)

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
3. Push any commit — the included workflow (`.github/workflows/deploy.yml`) builds and publishes the site.

## Structure

```
src/
  consts.ts            ← all personal config
  content/blog/        ← posts (one .md file each)
  layouts/Base.astro   ← page shell (header/footer)
  pages/               ← routes (index, blog, about, rss)
  styles/global.css    ← the entire design
```

RSS feed at `/rss.xml`, sitemap generated automatically.
