---
title: Blog
layout: page
---

The list of all my blogs -

<ul>
{% assign sorted = site.pages | sort: 'date' | reverse %}
{% for p in sorted %}
{% if p.layout=="blog" %}
<li>
    <a href="{{ p.url}}">{{ p.title }}</a> <span class="muted">({{p.date}})</span>
</li>
{% endif %}
{% endfor %}
</ul>