const fs = require('fs');
const logger = require('pino')();

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

function createHtmlMinFile(htmlMinify, filePathAndName) {
  try {
    fs.writeFileSync(`${filePathAndName}.min.html`, htmlMinify);
  } catch (err) {
    logger.error(err);
  }
}

const extractFileName = (path) => {
  const pathSplited = path.split('.');
  pathSplited.pop();
  return pathSplited[0];
};

// const htmlMinifier = async () => {
//   const html = readHtmlFile();
//   const htmlMinify = htmlFormatter(html);
//   logger.info(htmlMinify);
//   createHtmlMinFile(htmlMinify);
// };

const htmlMinifier = (htmlFilesPath) => {
  htmlFilesPath.forEach((filePath) => {
    const filesPathAndName = extractFileName(filePath);
    const html = readHtmlFile(filePath);
    const htmlMinify = htmlFormatter(html);
    createHtmlMinFile(htmlMinify, filesPathAndName);
  });
};

module.exports = {
  htmlMinifier,
  htmlFormatter,
  readHtmlFile,
};
