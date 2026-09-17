# projects/

Each subfolder here is a live demo linked from the Coursework section.

```
projects/willify/index.html      ->  https://jhansen2005.github.io/portfolio/projects/willify/
projects/hear-chat/index.html    ->  https://jhansen2005.github.io/portfolio/projects/hear-chat/
```

## Two things that break demos on GitHub Pages

**Paths are case-sensitive.** Windows treats `Images/logo.png` and `images/logo.png` as the same file; GitHub Pages does not. A mismatched case in `src` or `href` fails silently — the asset just doesn't load.

**Absolute paths break.** `/css/style.css` resolves against the domain root, not the project folder. Use `css/style.css` instead.

## Adding another project

Copy one `<article class="docket">` block in `_body.html`, edit the text, and point the link at the new folder:

```html
<div class="d-links">
  <a href="projects/your-project/">Open demo &#8599;</a>
  <a class="ghost" href="https://github.com/..." target="_blank" rel="noopener noreferrer">Source &#8599;</a>
</div>
```

Then run `python build.py` to regenerate `index.html`.

A project without a live demo gets a plain note instead of a dead link:

```html
<div class="d-links"><p class="d-note">Notebook available on request.</p></div>
```
