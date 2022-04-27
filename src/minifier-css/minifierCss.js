const fs = require('fs');
const logger = require('pino')();

function readCssFile() {
  try {
    return fs.readFileSync('./resources/css/index.css', 'utf8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

function cssFormatter(cssContent) {
  const regex = /(\sr\n|\n|\r)/gm;
  return cssContent.replace(regex, '').split(' ').filter((elmnt) => elmnt !== '').join('');
}

function createCssMinFile(cssMinify) {
  try {
    fs.writeFileSync('./resources/css/index.min.css', cssMinify);
  } catch (err) {
    logger.error(err);
  }
}

const cssMinifier = async () => {
  const css = readCssFile();
  const cssMinify = cssFormatter(css);
  createCssMinFile(cssMinify);
};

module.exports = {
  cssMinifier,
  cssFormatter,
  readCssFile,
};
