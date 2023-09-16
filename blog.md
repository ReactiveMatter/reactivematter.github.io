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
{% assign topic_sentence = ' ' %}
{% if p.topics %}
    {% assign topic_sentence= 'is about ' %}
    {% assign last =  p.topics.size | minus: 1 %}
    {% assign topics =  p.topics | sort %}
    {% for topic in topics %} 
        {% assign topic_sentence = topic_sentence  | append: "<a class='topic-link' href='/topic/" %}
        {% assign topic_sentence = topic_sentence  | append: topic %}
        {% assign topic_sentence = topic_sentence  | append: "'>" %}
        {% assign topic_sentence = topic_sentence  | append: topic %}
        {% assign topic_sentence = topic_sentence  | append: "</a>" %}
        {% if forloop.index < last %}
           {% assign topic_sentence = topic_sentence | append: ", " %}
        {% elsif forloop.index == last %}
           {% assign topic_sentence = topic_sentence | append: ", and " %}
        {% else %}
            {% assign topic_sentence = topic_sentence %}
        {% endif %}
    {% endfor %}
{% elsif p.topic %}
    {% assign topic_sentence = topic_sentence  | append: "<a class='topic-link' href='/topic/" %}
    {% assign topic_sentence = topic_sentence  | append: p.topic %}
    {% assign topic_sentence = topic_sentence  | append: "'>" %}
    {% assign topic_sentence = topic_sentence  | append: p.topic %}
    {% assign topic_sentence = topic_sentence  | append: "</a>" %}
{% else %}
    {% assign topic_sentence = ' ' %}
{% endif %}

<a href="{{ p.url}}">{{ p.title }}</a> <span class="muted">({{p.date}}) {{topic_sentence}}</span>
</li>
{% endif %}
{% endfor %}
</ul>