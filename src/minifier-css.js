const fs = require('fs');
const logger = require('pino')();

const { extractFileName, createMinFile } = require('./utils');

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
 * chore function of css minifier
 * @param {Array} cssFilesPath path of css files in project
 */
const cssMinifier = (cssFilesPath) => {
  cssFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const css = readCssFile(filePath);
    const cssMinify = cssFormatter(css);
    const fileExtension = '.css';
    createMinFile(cssMinify, filePathAndName, fileExtension);
  });
};

module.exports = {
  cssFormatter,
  readCssFile,
  cssMinifier,
};
