# Jhansen Orlando — Portfolio

Personal portfolio site. Single static HTML file, no build step, no dependencies to install.

**Live:** https://jhansen2005.github.io/portfolio/ *(after you follow the setup below)*

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site. This is the only file GitHub Pages needs. |
| `_body.html` | Source without the `<html>/<head>/<body>` wrapper. Used to regenerate `index.html`. Not served. |
| `build.py` | Wraps `_body.html` into `index.html`. |

Editing `index.html` directly is fine. If you edit `_body.html` instead, run `python build.py` to regenerate.

## Publish it on GitHub Pages

Run these from this folder (`jhansen-portfolio`), one at a time:

```bash
git init -b main
```

```bash
git add -A && git commit -m "Add portfolio site"
```

Create an empty repository named `portfolio` on GitHub first (no README, no .gitignore), then:

```bash
git remote add origin https://github.com/jhansen2005/portfolio.git
```

```bash
git push -u origin main
```

Then turn Pages on: repository → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main**, folder: **/ (root)** → Save.

The site is live at `https://jhansen2005.github.io/portfolio/` in about a minute.

## After it is live

Replace the Google Drive link on your CV with the Pages URL. The Drive folder holds a PDF from September 2025, which predates the Porto internship and does not show any of this work.

## Editing

Everything is in one file. The parts you are most likely to touch:

- **Colors** — the `:root` block at the top. Change a token once and it updates everywhere, in both light and dark mode.
- **Projects** — each `<article class="docket">` is one project card. Copy one to add another. `data-tags` controls which filter buttons show it (`backend`, `frontend`, `data`, `automation`, `testing`).
- **Numbers in the spec strip** — the `.specs` block near the top.

The page adapts to the reader's light or dark system setting on its own.

## A note before you push

The site describes the Porto work in prose. It contains **no source code from PT Porto Indonesia Sejahtera**, and it should stay that way — that code belongs to the company. Describing what you built is yours to share; the code is not.
