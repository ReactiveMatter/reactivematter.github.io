---
title: Home
layout: page
---

### My projects

- [Locker](/locker/locker.html): To save passwords, notes and journals with encryption.
- [Crypt](crypt): Encrypt and decrypt messages
- [Search](search): Search modifiers on popular search engines
- [Internet explorer](internet-explorer): A catalogue of things found on internet.

### Pages

- [Fallacies](fallacies/)

### Blogs

<ul>
{% assign sorted = site.pages | sort: 'date' | reverse %}
{% for p in sorted %}
{% if p.layout=="blog" %}
<li>
    <a href="{{ p.url}}">{{ p.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

See [all pages](all-pages/).