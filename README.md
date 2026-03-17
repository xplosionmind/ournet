<h1 align='center'>🪡 Knitting Our Internet 🧶</h1>

This repository hosts the resources, the material, and the website’s source code for [*Knitting Our Internet*](https://ournet.rocks/ 'Knitting Our Internet – website'), an interactive workshop travelling through the history of the Internet, and a collective re-imagination of participatory, decentralized alternatives.

This workshop aims at questioning the very essence of today’s social networks, exposing the critical limits given by centralization, monopoly, and surveillance capitalism.

## 📟 Software

This website is proudly built with [Eleventy](https://11ty.dev/ 'Eleventy’s official website'), using the [Deno](https://deno.land/ 'Deno’s official website') runtime. Translations are handled with [Weblate](https://weblate.org), hosted on [Codeberg Translate](https://translate.codeberg.org).

## 🏠 Hosting

[ournet.rocks](https://ournet.rocks '🪡 Knitting Our Internet 🧶') is proudly hosted on [*Nebuchadnezzar*](https://tommi.space/neb/ 'Nebuchadnezzar info on tommi.space'), Tommi’s server.

## 👾 Source code

The main repository is [hosted on Codeberg](https://codeberg.org/tommi/ournet 'ournet on Codeberg') and mirrored on [GitHub](https://github.com/xplosionmind/ournet 'ournet on GitHub'), where [issues](https://github.com/xplosiomind/tommi.space/issues 'ournet issues on GitHub') are being tracked.

## 💝 Want to help?

As a proudly independent project <cite>Knitting Our Internet</cite> is meant to be collective and collaborative. Not only contributions are welcome, but they are the essence of this workshop!

### 🪢 Host the workshop 💕

The best possible thing you can do is to [invite Tommi](https://ournet.rocks/invite/) to host the workshop, or [to host it yourself](https://ournet.rocks/weaver-kit/ 'The Weaver kit')!

### 🪙 Donate

Every detail of <cite>Knitting Our Internet</cite> costed us a lot of work.

At the moment, we have **no funding** whatsoever: all the expenses we face come our of our pockets. Even though we definitely do not do this for profit ([we hate capitalism](/weaver-kit/#surveillance-capitalism 'Section on Surveillance capitalism in The Weaver kit')), it would help a lot if you could chip in with **a donation you can afford**.

Possible ways to do it (sorted by preference):

1. [LiberaPay](https://liberapay.com/tommi/ 'Tommi on LiberaPay')
1. [PayPal](https://paypal.me/xplosionmind '@xplosionmind on PayPal.me')
1. Wire transfer: [get in touch](mailto:surfing@tommi.space) to get the bank account info
1. Cash: [get in touch](mailto:surfing@tommi.space), let’s see what we can do
1. Monero: `4AXFHU3h1GDGVr5nfnyngmSepfesyUJxCSXNH2JzFeBGbGxzzoMuhSCBDVf3THK1E5VnfLLm2hfgV3YosYd27ZFLMCVNUrP`

### 💡 Add or improve information

Even though we did a lot of research, there is always a lot to learn, and we are open to question our stances.

If you have any critiques, ideas, or suggestions, [open an issue](https://github.com/xplosionmind/ournet/issues/new 'New issue for ournet on GitHub') or [write us](mailto:surfing@tommi.space)!

### 🧑🏽‍💻 Improve the code

We absolutely are not Web development masters…

If you think you can help us with the workflow or with the technical infrastructure of this website, please do not hesitate to [open a PR](https://codeberg.org/tommi/ournet/pulls 'ournet on Codeberg')! The source code is open for you to play with!

#### 🏗️ Site structure

The structure of this repository, displayed below, is particularly complex because it is designed to make the integration with Weblate as smooth as possible.

```
./
├─ archive/
├─ meetings/
├─ ournet/
│	├─ _data/
│	├─ _includes/
│	│	└─ [LANG]/
│	├─ _layouts/
│	├─ artwork/
│	├─ assets/
│	├─ [LANG]/
│	│	├─ [PAGE]
│	│	└─ [PAGE].11tydata.json
│	└─ root.11tydata.json
├─ .eleventy.js
├─ .gitignore
├─ deno.lock
├─ package.json
└─ README.md
```

- `archive`, `meetings`, `ournet/assets`, `ournet/artwork`, and `README.md` are not parsed by Eleventy.
- Eleventy [just copies](https://codeberg.org/tommi/ournet/src/commit/740f0b5e703b7b16df18a0027ca1232bc66338a8/.eleventy.js#L17) `ournet/assets` and  `ournet/artwork` to the output directory.
- `ournet` is considered the [“input” directory](https://www.11ty.dev/docs/config/#input-directory '“Input Directory” section in 11ty’s Configuration Docs'), where the templates to be generated are placed.
- All the actual website pages are placed in a sub-directory of `ournet` that uses the language’s code (e.g. `ournet/el` for Greek).
- All templates that are to be translated must have [a separate datafile](https://www.11ty.dev/docs/data-template-dir/ '“Template and Directory Data Files” in 11ty Docs') (always ending in `.11tydata.json`), so that Weblate does not mess up the syntax while merging translations.
- Please, get in touch if you need more specific or advanced clarifications.

#### 🔧 Build steps

To serve or build the website locally, you have to install [Deno](https://deno.land/ 'Deno’s official website'), then, you should be up and running with one simple command:

```
deno install # only the first time, to install dependencies
deno run start
```

Once the local development server has started, you can see the live local preview visiting <http://localhost:8080/>.

### 🗣️ Translate

Translate the content of this website and the workshop materials to enable non English speakers to get involved!

<div class='flex'>
	<a class='yellow button' href='https://translate.codeberg.org/projects/ournet/' title='ournet on Codeberg Translate (Weblate)'>Translate</a>
	<a class='blue button' href='https://translate.codeberg.org/projects/ournet/#information' title='Info page for ournet on Codeberg Translate (Weblate)'>Translation guide</a>
</div>

### 🎨 Make art

Our mission is not merely to take back control of Our Internet. We believe in the strong value of art to convey and amplify a message and a mission.

You are welcome to realize any artwork 😎! Feel free to create stickers, paint posters, improve the CSS of this website, create flyers… you name it.

### 📣 Spread the word!

Make our voices heard and reclaim Our Internet! Share [ournet.rocks](https://ournet.rocks/) and join our fight!

It would be particularly meaningful if you knew anyone organizing events or actively participating in communities that would be interested in hosting the workshop. Connect us!
