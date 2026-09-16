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
<meta name="description" content="Jhansen Orlando - Odoo developer. Six months rebuilding ERP modules across Odoo 10, 16 and 19 for a footwear manufacturer in Jakarta.">
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
