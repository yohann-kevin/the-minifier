const { cssMinifier } = require('./src/minifier-css');
const { htmlMinifier } = require('./src/minifier-html');

const minifierCommandLine = (args) => {
  if (args.css) {
    cssMinifier(args.cssPath);
  }

  if (args.html) {
    htmlMinifier(args.htmlPath);
  }
};

module.exports = { minifierCommandLine };
