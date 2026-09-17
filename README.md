# Jhansen Orlando — Portfolio

Personal portfolio site. Static HTML, no framework, no build tooling required to run it.

**Live:** https://jhansen2005.github.io/portfolio/

## Structure

| File | What it is |
|---|---|
| `index.html` | The page GitHub Pages serves. |
| `_body.html` | The same content without the page wrapper. This is the one to edit. |
| `build.py` | Regenerates `index.html` from `_body.html`. |
| `projects/` | Live demos linked from the Coursework section. See `projects/README.md`. |

```bash
python build.py
```

## Editing

- **Colors** — the `:root` block at the top of `_body.html`. One token, updates everywhere, light and dark.
- **Projects** — each `<article class="docket">` is one card. `data-tags` controls which filter buttons show it.
- **Stats** — the `.specs` block near the top.

The page follows the reader's light/dark system setting automatically.

## About the case studies

The write-ups describe internal work at PT Porto Indonesia Sejahtera in prose. No source code from the company is included, and none will be.
