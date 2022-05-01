const fs = require('fs');
const logger = require('pino')();

function readCssFile(filesPath) {
  try {
    return fs.readFileSync(filesPath, 'utf8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

function cssFormatter(cssContent) {
  const regex = /(\sr\n|\n|\r)/gm;
  return cssContent.replace(regex, '').split(' ').filter((elmnt) => elmnt !== '').join('');
}

function createCssMinFile(cssMinify, filePathAndName) {
  try {
    fs.writeFileSync(`${filePathAndName}.min.css`, cssMinify);
  } catch (err) {
    logger.error(err);
  }
}

const cssMinifierSample = () => {
  const filesPath = './resources/css/index.css';
  const css = readCssFile(filesPath);
  const cssMinify = cssFormatter(css);
  logger.info(cssMinify);
  createCssMinFile(cssMinify);
};

const extractFileName = (path) => {
  const pathSplited = path.split('.');
  pathSplited.pop();
  return pathSplited[0];
};

const cssMinifier = (cssFilesPath) => {
  cssFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const css = readCssFile(filePath);
    const cssMinify = cssFormatter(css);
    createCssMinFile(cssMinify, filePathAndName);
  });
};

module.exports = {
  cssMinifierSample,
  cssFormatter,
  readCssFile,
  cssMinifier,
};
