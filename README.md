## The Minifier

The minifier is the new fast, light and easy-to-use minifier to optimize your css files (HTML and Javascript WIP) before deploying your web applications in production

### Install

```bash
npm install the-minifier
```

### Usage with cli

to see the available order list

```bash
the-minifier -h
```

you can get all the commands available via the minifier

```bash
🗜️  Minify html, css and javascript

  A light library to minify javascript, css and html easily

⚙️  Options ⚙️

  -a, --all string   📝 Minify all project
  -c, --css string   🖌️  Minify all project css
```

Other languages such as html and javascript will be available in future iterations

*How it works ?*

to minfy css you can use the following command

```bash
the-minifier --css
```

imagine your css file is in a style folder like this: `./style/index.css`

after using the command mentioned above you will see in this style folder a new file in this format: `./style/index.min.css`


### Bugs

If you find a bug please report it on github by creating a new [issues](https://github.com/yohann-kevin/the-minifier/issues).
