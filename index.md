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
{% for p in site.posts %}
<li>
    <a href="{{ p.url }}">{{ p.title }}</a>
</li>
{% endfor %}
</ul>

# All blogs
<ul>
{% for p in site.posts %}
{% if p.layout=="blog" %}
<li>
    <a href="{{ p.url }}">{{ p.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
