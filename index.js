const { cssMinifierSample, cssMinifier } = require('./src/minifier-css/minifier-css');
const { htmlMinifier } = require('./src/minifier-html/minifier-html');

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
