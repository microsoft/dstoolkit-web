---
layout: page
title: Toolkit
permalink: /toolkit/
---

![banner](images/data-science-toolkit-banner.jpg)

The Data Science Toolkit provides Data Scientists, Solution Architects and delivery teams, with packaged, vetted and tested delivery accelerators, delivery guidance and product backlogs for common machine learning scenarios.

You can use the delivery accelerators, delivery guides and product backlogs listed below in your delivery engagements. You can also contribute new material or update existing material or simply browse through the content. Please don't forget to reach out with any comments or contributions.


{%- if site.posts.size > 0 -%}
    <h2 class="post-list-heading">{{ page.list_title | default: "Delivery Accelerators Repositories" }}</h2>
    <ul class="post-list">
      {%- for post in site.posts -%}
      <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
        <h3>
          <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
          </a>
        </h3>
        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
      {%- endfor -%}
    </ul>
{%- endif -%}

Delivery Accelerators in Development

ML Ops for Synapse
