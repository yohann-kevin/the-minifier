## The Minifier

<div align="center">

  [![Maintainability](https://api.codeclimate.com/v1/badges/7210bd2f950466648bc2/maintainability)](https://codeclimate.com/github/yohann-kevin/the-minifier/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/7210bd2f950466648bc2/test_coverage)](https://codeclimate.com/github/yohann-kevin/the-minifier/test_coverage) ![example workflow](https://github.com/yohann-kevin/the-minifier/actions/workflows/node.js.yml/badge.svg)

</div>

The minifier is the new fast, light and easy-to-use minifier to optimize your css files (HTML and Javascript WIP) before deploying your web applications in production

### Install

```bash
npm install the-minifier
```

Verify package installation

```bash
the-minifier --version
```

If your command prompt prints the following line the package is correctly installed

```bash
the-minifier 1.2.0
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

  -h, --help       🆘 Print this usage guide                                     
  -a, --all        📝 Minify all project                                         
  -c, --css        🖌️ Minify all project css                                    
  -w, --html       🌐 Minify all project html                                    
  -j, --js         🚂 Minify all project javascript                              
  -t, --ts         🚆 Minify all project typescript                              
  -n, --no-min     ❌ Does not generate a .min file but overwrites existing files 
  -v, --version    🔍 View current install version
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

If you don't want to create a `.min` file you can use the `--no-min` option in your command.

```bash
the-minifier --js --no-min
```

⚠️ Warning this option will overwrite the existing file to recreate it with the minifier content

### Usage library

You can use our minification methods manually by importing them directly into your project.

```javascript
// example
const { cssMinifier, cssFormatter } = require('the-minifier');
```

- [cssMinifier](#cssMinifier)
- [htmlMinifier](#htmlMinifier)
- [jsMinifier](#jsMinifier)
- [tsMinifier](#tsMinifier)
- [cssFormatter](#cssFormatter)
- [htmlFormatter](#htmlFormatter)
- [jsFormatter](#jsFormatter)

<h5 id="cssMinifier">cssMinifier</h5>

Minifiy all files provided as arguments

```javascript
cssMinifier(cssFilesPath, nomin);
```

| arguments | description | type |
|-:|--|:-|
|cssFilesPath|Array containing the path of the files to minify|Array|
|nomin|If this argument is true it will generate a `.min` file|Boolean|

<h5 id="htmlMinifier">htmlMinifier</h5>

Minifiy all files provided as arguments

```javascript
htmlMinifier(htmlFilesPath, nomin);
```

| arguments | description | type |
|-:|--|:-|
|htmlFilesPath|Array containing the path of the files to minify|Array|
|nomin|If this argument is true it will generate a `.min` file|Boolean|

<h5 id="jsMinifier">jsMinifier</h5>

Minifiy all files provided as arguments

```javascript
jsMinifier(jsFilesPath, nomin);
```

| arguments | description | type |
|-:|--|:-|
|jsFilesPath|Array containing the path of the files to minify|Array|
|nomin|If this argument is true it will generate a `.min` file|Boolean|

<h5 id="tsMinifier">tsMinifier</h5>

Minifiy all files provided as arguments

```javascript
tsMinifier(tsFilesPath, nomin);
```

| arguments | description | type |
|-:|--|:-|
|tsFilesPath|Array containing the path of the files to minify|Array|
|nomin|If this argument is true it will generate a `.min` file|Boolean|

<h5 id="htmlFormatter">htmlFormatter</h5>

Return string content minify

```javascript
htmlFormatter(htmlContent);
```

| arguments | description | type |
|-:|--|:-|
|htmlContent|Content to minify|string|

<h5 id="cssFormatter">cssFormatter</h5>

Return string content minify

```javascript
cssFormatter(cssContent);
```

| arguments | description | type |
|-:|--|:-|
|cssContent|Content to minify|string|

<h5 id="jsFormatter">jsFormatter</h5>

Return string content minify

⚠️ The jsFormatter method also supports typescript

```javascript
jsFormatter(jsContent);
```

| arguments | description | type |
|-:|--|:-|
|jsContent|Content to minify|string|


### Bugs

If you find a bug please report it on github by creating a new [issues](https://github.com/yohann-kevin/the-minifier/issues).

### Contributing

If you wish to contribute to the project refer to [CONTRIBUTING.md](https://github.com/yohann-kevin/the-minifier/blob/master/CONTRIBUTING.md)
