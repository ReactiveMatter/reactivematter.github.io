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
    {% assign topic_sentence= 'is about ' %}
    {% for topic in p.topics %}
        {% assign topic_sentence = topic_sentence | append: topic %}
        {% if forloop.index < p.topics.size - 2 %}
           {% assign topic_sentence = topic_sentence | append: ", " %}
        {% elsif forloop.index == p.topics.size - 2 %}
           {% assign topic_sentence = topic_sentence | append: ", and " %}
        {% else %}
            {% assign topic_sentence = topic_sentence %}
        {% endif %}
    {% endfor %}
    {% elsif p.topic %}
        {% assign topic_sentence = 'is about ' | append: p.topic %}
    {% else %}
        {% assign topic_sentence = ' '}
    {% endif %}

    <a href="{{ p.url}}">{{ p.title }}</a> <span class="muted">({{p.date}}) {% capture topic_sentence %}{{topic_sentence}}{% endcapture %}</span>
</li>
{% endif %}
{% endfor %}
</ul>