# projects/

Each subfolder here becomes a live demo on your site.

```
projects/wilify/index.html      ->  https://jhansen2005.github.io/portfolio/projects/wilify/
projects/hear-chat/index.html   ->  https://jhansen2005.github.io/portfolio/projects/hear-chat/
```

The portfolio already links to both paths. They return 404 until you put the files in.

## What to do

1. Download the project from your Google Drive and unzip it.
2. Copy **everything** into the matching folder here — HTML, CSS, JS, images, fonts.
3. Rename the entry page to `index.html` if it is called something else (`home.html`, `wilify.html`, …). GitHub Pages serves `index.html` automatically when someone opens the folder URL.
4. Commit and push.

```bash
git add -A && git commit -m "Add project demos" && git push
```

## Two things that break demos on GitHub Pages

**Paths are case-sensitive.** On Windows, `<img src="Images/logo.png">` works even if the folder is called `images`. On GitHub Pages it does not — the image silently disappears. Check that every `src` and `href` matches the real file name exactly, capital letters included.

**Absolute paths break.** `/css/style.css` looks for the file at the domain root, not inside your project folder. Use `css/style.css` instead.

## Adding a project that is not here yet

In `_body.html`, copy one `<article class="docket">` block, change the text, and point the link at your new folder:

```html
<div class="d-links">
  <a href="projects/your-project/">Open demo &#8599;</a>
  <a class="ghost" href="https://github.com/jhansen2005/..." target="_blank" rel="noopener noreferrer">Source &#8599;</a>
</div>
```

Then run `python build.py` to regenerate `index.html`.

## If a project has no demo

Drop the `d-links` block entirely, or replace it with a plain note:

```html
<div class="d-links"><p class="d-note">Notebook available on request.</p></div>
```

An empty button that goes nowhere looks worse than no button.
