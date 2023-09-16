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
    {% if p.topics %}
    {% assign t= 'is about ' %}
    {% for topic in topics %}
        {% capture t %}{{ t }}{{ topic }}{% endcapture %}
        {% if forloop.index == p.topics.size - 2 %}
          {% capture t %}{{ t }} and {% endcapture %}
        {% elsif forloop.index < p.topics.size - 2 %}
          {% capture t %}{{ t }}, {% endcapture %}
        {% endif %
    {% endfor %}
    {% endif %}
    <a href="{{ p.url}}">{{ p.title }}</a> <span class="muted">({{p.date}})</span> {% capture t %}{{t}}{% endcapture %}
</li>
{% endif %}
{% endfor %}
</ul>