const {
  extractFileName, createMinFile, overwriteFile, readFile,
} = require('./utils');

/**
 * minify html content
 * @param {string} htmlContent content in html file
 * @returns {string} return html content minify
 */
const htmlFormatter = (htmlContent) => {
  const regex = /(\sr\n|\n|\r)/gm;
  return htmlContent.replace(regex, '').split('  ').join('');
};

/**
 * chore function of html minifier
 * @param {Array} htmlFilesPath path of html files in project
 * @param {Boolean} nomin manage no min file options
 */
const htmlMinifier = (htmlFilesPath, nomin) => {
  htmlFilesPath.forEach((filePath) => {
    const filesPathAndName = extractFileName(filePath);
    const html = readFile(filePath);
    const htmlMinify = htmlFormatter(html);
    const fileExtension = '.html';
    if (nomin) {
      overwriteFile(htmlMinify, filesPathAndName, fileExtension);
    } else {
      createMinFile(htmlMinify, filesPathAndName, fileExtension);
    }
  });
};

module.exports = {
  htmlFormatter,
  htmlMinifier,
};
