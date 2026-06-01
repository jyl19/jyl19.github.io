# Joshua Y. Lerner Website

Static academic-professional website scaffolded with Astro for deployment to `jyl19.github.io`.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Content To Update

- `src/data/site.ts`: homepage bio, links, research themes
- `src/data/publications.ts`: publication list
- `public/llms.txt`: machine-readable paper corpus index
- `public/papers/`: per-paper metadata and summaries for LLM-readable discovery
- `public/files/lerner_cv_2026.pdf`: current CV PDF
- optional future headshot in `public/`

## Paper Corpus Workflow

The canonical staging archive for paper versions is the local Dropbox folder
`/Users/joshualerner/Dropbox/LLM-Legible Paper Corpus`. Each paper has a slugged
folder with `metadata.yml`, `notes.md`, `versions/`, `approved-public/`, and
`private/`. Only files explicitly placed in `approved-public/` should be copied
into `public/papers/<paper-slug>/` and linked from the site.

## Deployment

Designed for GitHub Pages. The current `site` value in `astro.config.mjs` is set to `https://jyl19.github.io`.
