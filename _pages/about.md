---
permalink: /
title: "Yilai Liu"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="home-section">
  <h2>About</h2>
  <p>I am <strong>Yilai Liu</strong>, currently pursuing a <strong>Master of Philosophy</strong> degree at <strong>the University of Hong Kong (HKU)</strong>. I conduct my research at <a href="https://hongyangdu.github.io/nice/"><strong>NICE Lab</strong></a> under the supervision of <strong>Prof. Hongyang Du</strong>. Before that, I received my B.Eng. degree from <strong>Beijing University of Posts and Telecommunications (BUPT)</strong>.</p>
</div>

<div class="home-section">
  <h2>Research</h2>
  <p>My research focuses on <strong>temporal representation modeling</strong>, with an emphasis on contextual retrieval, compression and consistency modeling in long video and mobile data.</p>
</div>

<div class="home-section">
  <h2>Education</h2>
  <div class="education-list">
    <div class="education-item">
      <div class="education-icon">
        <img src="/images/hku_icon.png" width="64" alt="The University of Hong Kong" />
      </div>
      <div class="education-body">
        <div class="education-time">2025 - Present</div>
        <div class="education-school"><strong>The University of Hong Kong</strong></div>
        <div class="education-degree">Master of Philosophy,
        Department of Electrical and Computer Engineering</div>
      </div>
    </div>
    <div class="education-item">
      <div class="education-icon">
        <img src="/images/bupt_icon.png" width="64" alt="Beijing University of Posts and Telecommunications" />
      </div>
      <div class="education-body">
        <div class="education-time">2021 - 2025</div>
        <div class="education-school"><strong>Beijing University of Posts and Telecommunications</strong></div>
        <div class="education-degree">Bachelor of Engineering</div>
      </div>
    </div>
  </div>
</div>

<div class="home-section ongoing-research-section">
  <h2>Ongoing Research</h2>
  <div class="ongoing-research-list">
    <div class="ongoing-research-item">
      <span class="ongoing-research-title">***Bench</span>
      <span class="ongoing-research-sep"> - </span>
      <span class="ongoing-research-desc">Evaluating MLLMs' capability for fine-grained temporal reasoning beyond language shortcuts.</span>
    </div>
    <div class="ongoing-research-item">
      <span class="ongoing-research-title">PreCoG</span>
      <span class="ongoing-research-sep"> - </span>
      <span class="ongoing-research-desc">Preview-guided generation-time video correction for reducing AIGC workflow costs from long single-sample inference and high rejection rates.</span>
    </div>
  </div>
</div>

<div class="home-section selected-works-section">
  <div class="selected-works-header">
    <h2>Selected Works</h2>
    <a href="/research/">View all</a>
  </div>
  <div class="selected-works-list">
    {% assign selected_publications = site.publications | sort: "date" | reverse %}
    {% for category in site.publication_category %}
    {% assign category_title_shown = false %}
    {% for post in selected_publications %}
    {% if post.category != category[0] %}
      {% continue %}
    {% endif %}
    {% unless category_title_shown %}
    <h3 class="selected-work-category">{{ category[1].title }}</h3>
    {% assign category_title_shown = true %}
    {% endunless %}
    <div class="selected-work-item">
      <div class="selected-work-grid{% unless post.header.teaser %} selected-work-grid--no-image{% endunless %}">
        {% if post.header.teaser %}
        <div class="selected-work-image">
          <img src="/images/{{ post.header.teaser }}" alt="{{ post.title }}" />
        </div>
        {% endif %}
        <div class="selected-work-body">
      <div class="selected-work-title">{{ post.title }}</div>
      <div class="selected-work-meta">
        <span class="selected-work-venue">{{ post.venue }}</span>
        <span class="selected-work-year">{{ post.date | date: "%Y" }}</span>
      </div>
      {% if post.authors %}
      <div class="selected-work-authors">{{ post.authors | replace: 'Yilai Liu', '<strong><u>Yilai Liu</u></strong>' }}</div>
      {% elsif post.citation %}
      <div class="selected-work-authors">{{ post.citation | strip_html }}</div>
      {% endif %}
      {% if post.excerpt %}
      <div class="selected-work-excerpt">{{ post.excerpt }}</div>
      {% endif %}
      <div class="selected-work-links">
        {% if post.paperurl %}<a href="{{ post.paperurl }}">[Paper]</a>{% endif %}
        {% if post.slidesurl %}<a href="{{ post.slidesurl }}">[Slides]</a>{% endif %}
        {% if post.bibtexurl %}<a href="{{ post.bibtexurl }}">[BibTeX]</a>{% endif %}
      </div>
        </div>
      </div>
    </div>
    {% endfor %}
    {% endfor %}
  </div>
</div>

<div class="home-section">
  <h2>Competitions &amp; Awards</h2>
  <div class="ongoing-research-list awards-list">
    <div class="ongoing-research-item awards-item">
      <span class="ongoing-research-title">ISPRS TC I Contest on Remote Sensing</span>
      <span class="ongoing-research-sep"> - </span>
      <span class="ongoing-research-desc">Rank 2/43</span>
      <span class="selected-work-year awards-year">2024</span>
    </div>
    <div class="ongoing-research-item awards-item">
      <span class="ongoing-research-title">China International College Students' Innovation Competition</span>
      <span class="ongoing-research-sep"> - </span>
      <span class="ongoing-research-desc">National Second Prize</span>
      <span class="selected-work-year awards-year">2024</span>
    </div>
    <div class="ongoing-research-item awards-item">
      <span class="ongoing-research-title">Chinese Mathematics Competitions for College Students</span>
      <span class="ongoing-research-sep"> - </span>
      <span class="ongoing-research-desc">National Second Prize</span>
      <span class="selected-work-year awards-year">2022</span>
    </div>
  </div>
</div>
