const {
  extractFileName, createMinFile, overwriteFile, readFile,
} = require('./utils');

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
 * @param {Boolean} nomin manage no min file options
 */
const cssMinifier = (cssFilesPath, nomin) => {
  cssFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const css = readFile(filePath);
    const cssMinify = cssFormatter(css);
    const fileExtension = '.css';
    if (nomin) {
      overwriteFile(cssMinify, filePathAndName, fileExtension);
    } else {
      createMinFile(cssMinify, filePathAndName, fileExtension);
    }
  });
};

module.exports = {
  cssFormatter,
  cssMinifier,
};
