const fs = require('fs');
const logger = require('pino')();

const { extractFileName, createMinFile } = require('./utils');

function readHtmlFile(filesPath) {
  try {
    return fs.readFileSync(filesPath, 'utf-8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

function htmlFormatter(htmlContent) {
  const regex = /(\sr\n|\n|\r)/gm;
  return htmlContent.replace(regex, '').split('  ').join('');
}

const htmlMinifier = (htmlFilesPath) => {
  htmlFilesPath.forEach((filePath) => {
    const filesPathAndName = extractFileName(filePath);
    const html = readHtmlFile(filePath);
    const htmlMinify = htmlFormatter(html);
    const fileExtension = '.html';
    createMinFile(htmlMinify, filesPathAndName, fileExtension);
  });
};

module.exports = {
  htmlFormatter,
  readHtmlFile,
  htmlMinifier,
};
