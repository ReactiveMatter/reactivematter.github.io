---
title: 'From Passage SSG to Tunnel CMS'
layout: blog
date: 2024-09-08
topic: coding
---

Last year, I created a Static Site Generator using PHP - [Passage](https://github.com/ReactiveMatter/passage). The aim was to use PHP as a script and as well as a templating language for generating static site. This gave much more flexibility in designing the templates as all script variables are directly available in template files.

[Tunnel CMS](/tunnel-cms) is a dynamic counter part of Passage. The core idea remains the same - using PHP to parse markdown and to generate layout. It is a CMS that lies in between the Static Sites and Dynamic Sites as it saves the generated HTML files for later usage and builds HTML files only when the content of markdown file is changed.

This eases the deployment, as you can directly make changes in the markdown using FTP or any file web based file manager.