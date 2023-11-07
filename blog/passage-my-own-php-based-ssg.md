---
title: 'Passage: My own PHP based SSG'
layout: blog
date: 2023-11-07
topic: coding
---

While using Github Pages, it occured to me why can't I use PHP as a templating language for Static Site Generator (SSG). Turns out, I can. 

PHP is a powerful templating languages which is used to create static html in real time on per request. But I liked the idea of a SSG as for most blogs, the content doesn't change every now and then.

So, I created my own SSG using PHP and named it [Passage](https://github.com/ReactiveMatter/passage). It is gives me the freedom to create my static site in any manner I want. It used Parsedown to generate HTML and reads metadata from YAML frontmatter.

The most important benefit of a SSG with YAML frontmatter is that it is future proof with all necessary metadata included in the markdown file.