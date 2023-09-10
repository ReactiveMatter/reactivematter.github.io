---
title: Home
layout: page
---
**My projects**

- [Locker](/locker/locker.html): To save passwords, notes and journals with encryption.
- [Crypt](crypt): Encrypt and decrypt messages
- [Search](search): Search modifiers on popular search engines
- [Internet explorer](internet-explorer): A catalogue of things found on internet.

# Pinned Pages
- [Fallacies](fallacies)

# All pages
<ul>
{% for p in site.pages %}
% if p.layout=="page" %}
<li>
    <a href="{{ p.url }}">{{ p.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

# All blogs
<ul>
{% for p in site.pages | sort: "date", "last" %}
{% if p.layout=="blog" %}
<li>
    <a href="{{ p.url }}">{{ p.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
