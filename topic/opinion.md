---
title: Opinion
topic: opinion
layout: page
---

The list of blogs on the topic of {{ page.topic }} -

<ul>
{% assign sorted = site.pages | sort: 'date' | reverse %}
{% for p in sorted %}
{% if p.layout=="blog" %}
{% assign topic_sentence = ' ' %}
{% assign to_include = false %}
{% if p.topics %}
    {% assign topic_sentence= 'is about ' %}
    {% assign last =  p.topics.size | minus: 1 %}
    {% assign topics =  p.topics | sort %}
    {% for topic in topics %}
        {% if topic == page.topic %}
        {% assign to_include = true %}
        {% endif %}
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
    {% if p.topic == page.topic %}
    {% assign to_include = true %}
    {% endif %}
    {% assign topic_sentence = topic_sentence  | append: "<a class='topic-link' href='/topic/" %}
    {% assign topic_sentence = topic_sentence  | append: p.topic %}
    {% assign topic_sentence = topic_sentence  | append: "'>" %}
    {% assign topic_sentence = topic_sentence  | append: p.topic %}
    {% assign topic_sentence = topic_sentence  | append: "</a>" %}
{% else %}
    {% assign topic_sentence = ' ' %}
{% endif %}

{% if to_include %}
<li>
<a href="{{ p.url }}">{{ p.title }}</a> <span class="muted">({{p.date}}) {{topic_sentence}}</span>
</li>
{% endif %}
{% endif %}
{% endfor %}
</ul>