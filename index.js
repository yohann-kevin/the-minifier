const { cssMinifier } = require('./src/minifier-css');
const { htmlMinifier } = require('./src/minifier-html');
const { jsMinifier } = require('./src/minifier-js');

const minifierCommandLine = (args) => {
  if (args.css) {
    cssMinifier(args.cssPath);
  }

  if (args.html) {
    htmlMinifier(args.htmlPath);
  }

  if (args.js) {
    jsMinifier(args.jsPath);
  }
};

module.exports = { minifierCommandLine };
