---
layout: post
title: "How to Make an Icon Font"
author: Helen V. Holmes
img: hvholmes.png
date: 2014-01-30 14:13
description: Better than CSS sprite sheets by far.
header: post--javacv.jpg
---

If you've ever had to deal with sprite sheet you'll understand why icon fonts are infinitely preferable - no need to constantly fiddle with ```background-position```s. Icon fonts also give us all the benefits of fonts - infinitely scaleable, cross-browser compatibility, ability to easy swap out colors - without having to deal with the pitfalls of SVGs or images (cross-browser compabiity issues and dozens of small files).

Building a font is relatively simple. If you're on a Mac you can download [Inkscape](http://www.inkscape.org/en/) for free or use [GlyphsApp](http://www.glyphsapp.com/), which is $300.

To get started:
1. [Community Icon Font Template](https://github.com/Heydon/Community-Icon-Font/blob/master/resources/inkscape_iconfont_canvas_template.svg)

2. Open the **SVG Font Editor Pane** in Inkscape. **Add Glyph** and then type in a letter your want it to correspond to.

3. Import the SVG and align to baseline (blue line, which hands slightly below canvas). 

4. Ungroup vector and ensure Inkscape understands it as one glyph by going to **Path > Union**. If **Union** isn't working, it's typically because groups still exist in your shape.

5. With vector selected, in the SVG Font Editor Pane: **Get Curves from Selection** with glyph you want it associated with selected.

6. Continue steps 1-5 for all of the glyphs you want to add. For ensuring glyphs are the same size, I leave other glyphs out in the artspace to compare. Glyphs out in the artspace won't affect the end font file.

7. Save the file as font-name.svg.

8. Convert the svg file to a font file at a converter site, such as [FreeFontConverter](http://www.freefontconverter.com/).

9. To generate an @font-face kit for the font for web use, use the generated font file at a site such as [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator).