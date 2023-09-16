---
title: Migrating from Dokuwiki to Obsdian
layout: blog
date: 2023-09-16
topics: [note-talking, coding]
---

I have been using Dokuwiki for the past 4 years, and it has served me well till now. However, no offline solution in mobile is a very critical limitation to use Dokuwiki as a personal knowlegement management (PKM) app.

Few months ago, I discovered [Obsidian](https://obsidian.md), and I am awestruck since then. It has all the feature required of a wiki-like notes setup. The YAML as frontmatter and flexibility in properties is something Dokuwiki may not be capable of (without any complex plugin and configurati. However, the real power of Obsidian lies in plugins. I am making heavy use of [Dataview plugin](https://blacksmithgu.github.io/obsidian-dataview/). Further, using sync plugins, notes can be synced across the devices.

Therefore, I decided to migrate from Dokuwiki to Obsidian. During the process I have created a python script which converts my Dokuwiki notes.

You can find the python script at <https://github.com/ReactiveMatter/dokuwiki-obsidian>.

If you want to use Dokuwiki as a publishing platform from Obsidian, you can use [Obsidian-2-Dokuwiki](https://github.com/vzeller/obsidian2dokuwiki) script by vzeller.