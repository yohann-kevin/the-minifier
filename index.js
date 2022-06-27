const { cssMinifier } = require('./src/minifier-css');
const { htmlMinifier } = require('./src/minifier-html');
const { jsMinifier, tsMinifier } = require('./src/minifier-js');

const minifierCommandLine = (args) => {
  if (args.css) {
    cssMinifier(args.cssPath, args.nomin);
  }

  if (args.html) {
    htmlMinifier(args.htmlPath, args.nomin);

    
  }

  if (args.js) {
    jsMinifier(args.jsPath, args.nomin);
  }

  if (args.ts) {
    tsMinifier(args.tsPath, args.nomin);
  }
};

module.exports = { minifierCommandLine };
