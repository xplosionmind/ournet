---
title: 🪡 Knitting Our Internet 🧶
reference_page: index
---

{{ site.description.full }}

<article class='yellow box'>
	<h2 id='host' class='center'>Host the workshop! 🤩</h2>
	<p>As the workshop is conceived to happen <strong>exclusively in person</strong>, this website exists just collect information about it.</p>
	<p>You are welcome to invite Tommi, its creator, to host the workshop and bring a personal touch to it! Otherwise, we produced <cite>The Weaver Kit</cite>, which contains all the materials and information to help you in hosting the workshop yourself.</p>
	<div class='flex'>
		<a class='red button' href='/invite/'>Invite Tommi</a>
		<a class='blue button' href='/knit/'>The Weaver kit</a>
	</div>
</article>

<figure>
	<img src='{{ site.image }}' alt='A group of people sitting in a circle, connected by a red rope'>
</figure>

## About

### 📽️ The story

During the first semester of 2023, while writing [his bachelor’s thesis](https://tommi.space/csss/ '“Computer Sciences Are Social Sciences”, Tommaso Marmo’s bachelor’s thesis'), [Tommi](https://tommi.space/ 'The virtual representation of Tommi’s mind'), got an idea for simple yet critical and accurate introduction the [Fediverse](https://en.wikipedia.org/wiki/Fediverse 'Fediverse on Wikipedia') to non-experts. United with the research for his thesis, the content and structure of the workshop changed and matured over time, adapting to very diverse publics of any ages and backgrounds.

In June 2024, after [having hosted the workshop in many occasions](/events/ 'past and future occasions when this workshop will be hosted'), Tommi decided to take <cite>Knitting Our Internet</cite> to the next level, involving a [marvelous team of incredible people](#the-team) to give it a visual identity, a better structure, and publish its website—the one you are reading right now.

<div class='flex'>
	<a class='yellow button' href='/events/' title='All the occasions when the workshop was hosted'>Past editions</a>
</div>

### \[WIP\] Inter-generational

### \[WIP\] Interdisciplinary

## \[WIP\] Design

## Method

This workshop started as a personal project. Only after one year it evolved into a broader and more structured endeavour, involving [a group of wonderful people](#team).

When considering the idea of involving other individuals and ask for their time and efforts, Tommi did not want to do so for the sake of friendship only, but at the same time he did not have the funds to pay their work either.

For these reasons, this whole project is brought forward on the principles of **personal curiosity** and **mutual aid**.

If you are interested in learning more, read [the introductory email](first-email.md) I sent to the first members of the team to invite them to get involved.

## 🙋🏼 The team

<ul>
	{%- for person in people -%}
		<li>
			<a href='{{ person.url }}'>{{ person.name }}</a>,
			{{ person.role }}
		</li>
	{%- endfor -%}
</ul>
