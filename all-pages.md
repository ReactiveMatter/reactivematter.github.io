---
title: All pages
layout: page
---
<ul>
{% assign sorted = site.pages %}
{% for p in sorted %}
<li>
    <a href="{{ p.url}}">{{ p.title }}</a>
</li>
{% endfor %}
</ul>