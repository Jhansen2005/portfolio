# -*- coding: utf-8 -*-
"""Wrap _body.html into a standalone index.html for GitHub Pages.

Usage:  python build.py
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
FAVICON = ('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 '
           'viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>'
           '&#127981;</text></svg>')

src = open(os.path.join(HERE, '_body.html'), encoding='utf8').read()
if '<!--SPLIT-->' not in src:
    raise SystemExit('_body.html is missing the <!--SPLIT--> marker between head and body content.')
head, body = src.split('<!--SPLIT-->', 1)

html = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Jhansen Orlando - Odoo developer. Since February 2026, rebuilding ERP modules across Odoo 10, 16 and 19 for a footwear manufacturer in Jakarta.">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Jhansen Orlando">
<meta property="og:url" content="https://jhansen2005.github.io/portfolio/">
<meta property="og:title" content="Jhansen Orlando – Odoo Developer Portfolio">
<meta property="og:description" content="Jhansen Orlando - Odoo developer. Since February 2026, rebuilding ERP modules across Odoo 10, 16 and 19 for a footwear manufacturer in Jakarta.">
<meta property="og:image" content="https://jhansen2005.github.io/portfolio/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta property="og:image:alt" content="Jhansen Orlando – ERP systems built to keep businesses running. Odoo 10, 16 and 19 with Python, PostgreSQL and XML.">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{FAVICON}">
{head.strip()}
</head>
<body>
{body.strip()}
</body>
</html>
'''

out = os.path.join(HERE, 'index.html')
open(out, 'w', encoding='utf8').write(html)
print(f'wrote {out} ({len(html)} bytes)')
