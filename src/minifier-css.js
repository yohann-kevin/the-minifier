const fs = require('fs');
const logger = require('pino')();

const { extractFileName } = require('./utils');

/**
 * read css file with file path
 * @param {string} filesPath path of css file
 * @returns {string} return cotent in file
 */
function readCssFile(filesPath) {
  try {
    return fs.readFileSync(filesPath, 'utf8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

/**
 * minify css content
 * @param {string} cssContent content in css file
 * @returns {string} return css content minify
 */
function cssFormatter(cssContent) {
  const regex = /(\sr\n|\n|\r)/gm;
  return cssContent.replace(regex, '').split('  ').filter((elmnt) => elmnt !== '').join('');
}

/**
 * create new file.min.css
 * @param {string} cssMinify css content minify
 * @param {*} filePathAndName path and name of file
 */
function createCssMinFile(cssMinify, filePathAndName) {
  try {
    fs.writeFileSync(`${filePathAndName}.min.css`, cssMinify);
  } catch (err) {
    logger.error(err);
    throw err;
  }
}

/**
 * extract path and name of css file
 * @param {string} path path of css file
 * @returns {string} path and name of css file without extension
 */
// const extractFileName = (path) => {
//   const pathSplited = path.split('.');
//   pathSplited.pop();
//   return pathSplited[0];
// };

/**
 * chore function of css minifier
 * @param {Array} cssFilesPath path of css files in project
 */
const cssMinifier = (cssFilesPath) => {
  cssFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const css = readCssFile(filePath);
    const cssMinify = cssFormatter(css);
    createCssMinFile(cssMinify, filePathAndName);
  });
};

module.exports = {
  cssFormatter,
  createCssMinFile,
  readCssFile,
  cssMinifier,
};
