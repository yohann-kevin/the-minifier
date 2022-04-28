const { cssMinifier } = require('./src/minifier-css/minifierCss');
const { htmlMinifier } = require('./src/minifier-html/minifierHtml');

const functionTest = () => {
  // cssMinifier();
  htmlMinifier();
};

module.exports = { functionTest };

functionTest();
