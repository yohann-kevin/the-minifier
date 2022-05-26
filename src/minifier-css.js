const { extractFileName, createMinFile, readFile } = require('./utils');

/**
 * minify css content
 * @param {string} cssContent content in css file
 * @returns {string} return css content minify
 */
const cssFormatter = (cssContent) => {
  const regex = /(\sr\n|\n|\r)/gm;
  return cssContent.replace(regex, '').split('  ').filter((elmnt) => elmnt !== '').join('');
};

/**
 * chore function of css minifier
 * @param {Array} cssFilesPath path of css files in project
 */
const cssMinifier = (cssFilesPath) => {
  cssFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const css = readFile(filePath);
    const cssMinify = cssFormatter(css);
    const fileExtension = '.css';
    createMinFile(cssMinify, filePathAndName, fileExtension);
  });
};

module.exports = {
  cssFormatter,
  cssMinifier,
};
