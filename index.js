const { cssMinifier } = require('./src/minifier-css/minifier-css');
const { htmlMinifier } = require('./src/minifier-html/minifier-html');

const minifier = () => {
  // cssMinifierSample();
  // htmlMinifier();
};

const minifierCommandLine = (args) => {
  if (args.css) {
    cssMinifier(args.cssPath);
  }

  if (args.html) {
    htmlMinifier(args.htmlPath);
  }
};

module.exports = { minifier, minifierCommandLine };

// minifier();
