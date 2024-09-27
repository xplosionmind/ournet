---
title: La Nostra Rete 🧶
ref: index
priority: 0.9
---

{{ site.description[lang].full }}

<article class='yellow box'>
	<h2 id='host' class='center'>Ospita questo lab! 🪢</h2>
	<p>Questo workshop si tiene <strong>esclusivamente in persona</strong>: questo sito contiene solo informazioni collegate.</p>
	<p>Puoi invitare Tommi, il suo creatore, a tenerlo e dare un tocco personale! Altrimenti, abbiamo prodotto il <cite lang='en'>Weaver Kit</cite>, che contiene tutti i materiali e le informazioni necessarie per aiutarti a condurre il laboratorio tu stessə.</p>
	<div class='flex'>
		<a class='red button' href='/invita/'>Invita Tommi</a>
		<a class='blue button' href='/it/weaver-kit/'>Il Weaver kit</a>
	</div>
</article>

<figure>
	<img src='{{ site.image }}' alt='Un gruppo di persone sedute in cerchio, connesse da un filo di lana rosso'>
</figure>

## 🧐 Informazioni 👀

### La storia

Nel primo semestre del 2023, mentre scriveva [la sua tesi](https://tommi.space/csss/ '“Computer Sciences Are Social Sciences”, la tesi di Tommaso Marmo'), [Tommi](https://tommi.space/ 'La rappresentazione virtuale della mente di Tommi') ha avuto un’idea per un’introduzione semplice ma accurata al [Fediverso](https://en.wikipedia.org/wiki/Fediverse 'Il Fediverso su Wikipedia') per non-esperti. Arricchiti dalla ricerca per la sua tesi, sia il contenuto che la struttura del workshop sono cambiati e maturati nel tempo, adattandosi a pubblici diversi di ogni età e background.

Nel giugno 2024, dopo aver tenuto il laboratorio [in molte occasioni](/#events 'occasioni presenti e future in cui il workshop è stato e sarà tenuto'), Tommi ha deciso di approfondire il suo lavoro su <cite>La Nostra Rete</cite>, anche includendo [alcunз amicз](#contributors), per dargli un’identità visiva, una struttura migliore e per pubblicare questo sito—quello che stai leggendo ora.

<div class='flex'>
	<a class='yellow button' href='/#events' title='Tutte le occasioni in cui questo laboratorio è stato tenuto'>Edizioni passate</a>
</div>

### 🫱🏼‍🫲🏾 Per tuttз! 💕

Non è meramente retorico: questo workshop è davvero **per tuttз**! Sin dal principio, questo workshop è stato [concepito per adattarsi](/knit/#modularity) a ogni pubblico e situazione.

- È **interdisciplinare**, perché mette in luce la natura profondamente socio-politica di qualcosa che di solito è considerato da un punto di vista meramente tecnico. Inoltre, il workshop è pensato per essere contaminato da forme d’arte e approcci differenti.
- È **intergenerazionale**, perché può essere molto potente come un semplice e divertente gioco per bambinз, ma anche come una profonda riflessione sul dominio digitale per lз più anzianз, o un’opportunità per approcciare lo stesso argomento da una prospettiva diversa per ciascuna generazione.
- È **critico ma aperto**, perché ha opinioni chiare ed è fortemente posizionato politicamente, ma è anche aperto a critiche, perché vuol essere uno spazio sicuro anche quando le persone partecipanti non si conoscono fra loro.
- È ***veramente* accessibile**. Nonostante “accessibilità” sia una parola molto popolare ma spesso fraintesa, sin dall’inizio questo workshop è stato pensato per essere un’esperienza significativa anche per persone appartenenti a minoranze sotto-rappresentate o con disabilità. L’accessibilità de <cite>La Nostra Rete</cite> è <strong>profondamente relazionale</strong>: solamente interagendo guidatз dallə moderatorə l’esperienza può essere inclusiva e sicura per tuttз.

## 🗓️ Eventi passati e futuri

{% render 'events.liquid', events: events %}

## 💝 Contribuisci

{% render 'contribute.md' %}

## 🤗 Filosofia di contribuzione

Considerando l’idea di coinvolgere altre persone chiedendo il loro tempo e impegno, Tommi non voleva fosse per pura amicizia, ma contemporaneamente non aveva nemmeno fondi per pagare il loro lavoro.

Per queste ragioni, questo progetto è interamente portato avanti da principi di **mutuo aiuto** e **curiosità personale**.

Se sei interessatə a scoprire di più, leggi [l’email introduttiva](first-email.md) che Tommi ha inviato alle prime persone che ha invitato a collaborare.

## 🙋🏼 Contributorз

{% for person in people -%}
	- [{{ person.name }}]({{ person.url }}), {{ person.role }}
{% endfor -%}
