const { cssMinifier } = require('./src/minifier-css/minifierCss');

const functionTest = () => {
  console.log('hello is kirua');
  cssMinifier();
};

module.exports = { functionTest };

functionTest();
