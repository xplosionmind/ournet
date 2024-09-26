---
title: 🪡 Knitting Our Internet 🧶
reference_page: index
---

{{ site.description[lang].full }}

<article class='yellow box'>
	<h2 id='host' class='center'>Host the workshop! 🪢</h2>
	<p>This workshop is conceived to happen <strong>exclusively in person</strong>: this website only contains information about it.</p>
	<p>You are welcome to invite Tommi, its creator, to host the workshop and bring a personal touch to it! Otherwise, we produced <cite>The Weaver Kit</cite>, which contains all the materials and information to help you in hosting the workshop yourself.</p>
	<div class='flex'>
		<a class='red button' href='/invite/'>Invite Tommi</a>
		<a class='blue button' href='/knit/'>The Weaver kit</a>
	</div>
</article>

<figure>
	<img src='{{ site.image }}' alt='A group of people sitting in a circle, connected by a red rope'>
</figure>

## 🧐 About 👀

### The story

During the first semester of 2023, while writing [his bachelor’s thesis](https://tommi.space/csss/ '“Computer Sciences Are Social Sciences”, Tommaso Marmo’s bachelor’s thesis'), [Tommi](https://tommi.space/ 'The virtual representation of Tommi’s mind'), got an idea for a simple yet critical and accurate introduction the [Fediverse](https://en.wikipedia.org/wiki/Fediverse 'Fediverse on Wikipedia') to non-experts. Enriched by the research for his thesis, the content and structure of the workshop changed and matured over time, adapting to very diverse publics of any age and background.

In June 2024, after [having hosted the workshop in many occasions](/#events 'past and future occasions when this workshop was and will be hosted'), Tommi decided to deepen his work on <cite>Knitting Our Internet</cite>, also involving [some friends](#contributors) to give it a visual identity, a better structure, and publish its website—the one you are reading right now.

<div class='flex'>
	<a class='yellow button' href='/#events' title='All the occasions when the workshop was hosted'>Past editions</a>
</div>

### 🫱🏼‍🫲🏾 For all! 💕

It is not merely rhethorical: this workshop is truly **for everyone**! This workshop was [concieved to adapt](/knit/#modularity) to any public and environment, by design.

- It is **inter-disciplinary**, because it highlights the profoundly socio-political nature of something that is usually considered from a merely technical point of view. Furthermore, the workshop is meant to be contaminated by different forms of art and approaches.
- It is **inter-generational**, because it can be very powerful as a simple and entertaining game for kids, as a profound reflection on the digital domain for the elders, but also as an opportunity to approach the same topic from the perspective of different generations.
- It is **critical but welcoming**, because it is very opinionated and strongly positioned politically, but it is also open to critiques, aiming to be a truly safe space even if the participants do not know each other.
- It is ***truly* accessible**. Despite “accessibility” being a widely popular but misused buzzword, since the beginning this workshop was built to be a meaningful experience also for people coming from under-represented minorities or with disabilities. The accessibility of <cite>Knitting Our Internet</cite> is <strong>deeply relational</strong>: only by interacting and through the guidance of the host the experience can be inclusive and safe for all.

## 🗓️ Past and future events

{% render 'events.liquid', events: events %}

## 💝 Contribute

{% render 'contribute.md' %}

## 🤗 Contribution philosophy

When considering the idea of involving other people and ask for their time and effort, Tommi did not want to do so for the sake of friendship only, but at the same time he did not have the funds to pay their work either.

For these reasons, this whole project is brought forward on the principles of **mutual aid** and **personal curiosity**.

If you are interested in learning more, read [the introductory email](first-email.md) Tommi sent to the first people he invited to collaborate.

## 🙋🏼 Contributors

{% for person in people -%}
	- [{{ person.name }}]({{ person.url }}), {{ person.role }}
{% endfor -%}
