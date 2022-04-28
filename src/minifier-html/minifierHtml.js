const fs = require('fs');
const logger = require('pino')();

function readHtmlFile() {
  try {
    return fs.readFileSync('./resources/html/index.html', 'utf8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

function htmlFormatter(htmlContent) {
  const regex = /(\sr\n|\n|\r)/gm;
  return htmlContent.replace(regex, '').split(' ').filter((elmnt) => elmnt !== '').join('');
}

function createHtmlMinFile(htmlMinify) {
  try {
    fs.writeFileSync('./resources/html/index.min.html', htmlMinify);
  } catch (err) {
    logger.error(err);
  }
}

const htmlMinifier = async () => {
  const html = readHtmlFile();
  const htmlMinify = htmlFormatter(html);
  logger.info(htmlMinify);
  createHtmlMinFile(htmlMinify);
};

module.exports = { htmlMinifier };
