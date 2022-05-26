## The Minifier

<div align="center">

  [![Maintainability](https://api.codeclimate.com/v1/badges/7210bd2f950466648bc2/maintainability)](https://codeclimate.com/github/yohann-kevin/the-minifier/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7210bd2f950466648bc2/test_coverage)](https://codeclimate.com/github/yohann-kevin/the-minifier/test_coverage) ![example workflow](https://github.com/yohann-kevin/the-minifier/actions/workflows/node.js.yml/badge.svg)

</div>

The minifier is the new fast, light and easy-to-use minifier to optimize your css files (HTML and Javascript WIP) before deploying your web applications in production

### Install

```bash
npm install the-minifier
```

### Usage with cli

to see the available order list

```bash
the-minifier
```

you can get all the commands available via the minifier

```bash
🗜️  Minify html, css and javascript

  A light library to minify javascript, css and html easily

⚙️  Options ⚙️

  -a, --all string   📝 Minify all project
  -c, --css string   🖌️  Minify all project css
  -w, --html string   🌐 Minify all project html
  -j, --js string   🚂 Minify all project javascript
  -t, --ts string     🚆 Minify all project typescript
```

Other languages such as html and javascript will be available in future iterations

*How it works ?*

to minfy css you can use the following command

```bash
the-minifier --css
```

imagine your css file is in a style folder like this: `./style/index.css`

after using the command mentioned above you will see in this style folder a new file in this format: `./style/index.min.css`

the system is the same with html or javascript

if you want to minify the html of your project type the following command

```bash
the-minifier --html
```

you will see `*.min.html` files appear

same for javascript

```bash
the-minifier --js
```

you will see `*.min.js` files appear

the application now supports `typescript` in addition to javascript

```bash
the-minifier --ts
```

### Bugs

If you find a bug please report it on github by creating a new [issues](https://github.com/yohann-kevin/the-minifier/issues).
