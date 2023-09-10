---
title: All pages
layout: page
---
<ul>
{% assign sorted = site.pages %}
{% for p in sorted %}
{% if p.layout=="page" %}
<li>
    <a href="{{ p.url}}">{{ p.title }}</a>
</li>
{% endif %}
{% endfor %}
</ul>