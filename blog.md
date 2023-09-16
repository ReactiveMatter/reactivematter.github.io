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
    {% assign t= 'is about '}
        {% for topic in topics}
            {% t += topic %}
            {% if forloop.index == topics.size - 2}
                {% t+ = ' and '}
            {% elsif forloop.index < topics.size - 2}
                {% t+ = ', '}
            {% else %}
                {% t+= '' %}
            {% endif %}
        {% endfor %}
    {% endif %}
    <a href="{{ p.url}}">{{ p.title }}</a> <span class="muted">({{p.date}})</span> {{t}}
    }
</li>
{% endif %}
{% endfor %}
</ul>