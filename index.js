const { cssMinifierSample, cssMinifier } = require('./src/minifier-css/minifierCss');
const { htmlMinifier } = require('./src/minifier-html/minifierHtml');

const minifier = () => {
  // cssMinifierSample();
  // htmlMinifier();
};

const minifierCommandLine = (args) => {
  // console.log(args);
  if (args.css) {
    cssMinifier(args.cssPath);
  }
};

module.exports = { minifier, minifierCommandLine };

// minifier();
