---
title: 'Tunnel CMS 2.0 and SSG'
layout: blog
date: 2025-03-15
topic: coding
---

[Tunnel CMS](https://github.com/ReactiveMatter) is a minimalistic markdown based CMS. This weekend, I have rewritten the CMS and evolved it into Tunnel CMS 2.0.

The reason for rewriting is a persistent dilemma in choosing a CMS. Whether to use a Static Site Generator (SSG) or use a dynamic CMS. Both have its pros and cons:

| Feature                | Static Site Generator (SSG)            | Dynamic CMS                      |
|------------------------|---------------------------------|--------------------------------|
| **Performance**        | Extremely fast (pre-rendered HTML) | Slower due to processing |
| **Security**           | High (no database, no scripts, small attack surface) | More vulnerable (DB, authentication risks) |
| **Content Management** | Markdown/YAML files with manual uploading via FTP or SSH | User-friendly admin panel for non-technical users |
| **Scalability**        | High as files are static | Requires caching, load balancing for large traffic |
| **Interactivity**      | Limited; requires JS for dynamic features | Fully dynamic (forms, comments, search, etc.) |
| **Update Process**     | Requires site rebuild on content change | Instant updates via admin panel |

While SSG approach is excellent, the deployment process is quite cumbersome and not quick. You need to generate static files and then deploy them to the server using SSH or FTP. Similarly, to add content, you must have the access to your source on your primary device, where the the build process happen. Updating from mobile phone is a big hassle. Surely, there are ways like using git and auto deploy. For one user, this is still manageable, but when in team it is just too out of reach of everyone.

Full fledged CMS, though great with UI and admin panels, are a security hazard and quite slow. Every CMS requires the user to login and manage content via web. So they must really work hard to make it secure and it requires constant efforts. The big CMS do well in this regard, but ultimately becomes bloated and slow. Also the setup processes are becoming more and more difficult with time. Gone are the days where you just put a php file on server and it works. But web based CMS are excellent when in team.

With Tunnel CMS, I have tried to get the best of both approaches. Tunnel CMS is simply a parser of Markdown files giving HTML output in real time using template files. This brings speeds and flexibility, and makes it extremely lightweight. Cache is also implemented to further reduce the rendering time.

Now, the issue come on how to access and edit the markdown files. For those titling towards the SSG approach may use FTP or Git for this purpose, and those who need web based UI can use any of the web based file managers. Web based file managers are also a security hazard, but there is no true alternative to manage content via web.

Tunnel CMS does not restrict in anyway what you can do with your website. It is only a tunnel between your content and the HTML output. What you put in and what you take out is truly an open canvas and left to adventurism of the user.


# Why 2.0 ?

Tunnel CMS 1.0 was rather very very simple. It used to create static HTML files on the server from the content, and then serve these static files whenever required. The build process had to be manually initiated. All code base was unstructured with everything happening inside a build.php file. And there was no option to have a truly dynamic site. Further, the content was in the root and the CMS files were in a subfolder except for the index.php file, resulting in no clear separation between content and CMS files.

Tunnel CMS 2.0 first and foremost ensure better code organisation. The markdown content is kept in a separate content folder and the public assets in a separate assets folder. Markdown content cannot be accessed directly.

It makes the cache feature optional, and when cache is used, the build process is automatic if content has changed.

Then it makes it extensible via plugins. Plugins can hook into various places in the entire process to change the output or do whatever it want.

I am using tinyfilemanager to manage the content from web. This allow my team mates as well to manage the content.
