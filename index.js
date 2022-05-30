const { cssMinifier } = require('./src/minifier-css');
const { htmlMinifier } = require('./src/minifier-html');
const { jsMinifier, tsMinifier } = require('./src/minifier-js');

const minifierCommandLine = (args) => {
  if (args.config) {
    console.log(args.config);
  } else {
    if (args.css) {
      cssMinifier(args.cssPath);
    }

    if (args.html) {
      htmlMinifier(args.htmlPath);
    }

    if (args.js) {
      jsMinifier(args.jsPath);
    }

    if (args.ts) {
      tsMinifier(args.tsPath);
    }
  }
};

module.exports = { minifierCommandLine };
