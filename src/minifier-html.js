/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
const {
  extractFileName, createFile, readFile,
} = require('./utils');

/**
 * return line without comment
 * @param {string} line
 * @returns return line without comment
 */
const removeInlineHtmlComment = (line) => {
  const lineSplitted = line.split(' ');
  const startComment = lineSplitted.indexOf('<!--');
  const endComment = lineSplitted.indexOf('-->');
  lineSplitted.splice(startComment, endComment);
  return lineSplitted.join(' ');
};

/**
 * minify html content
 * @param {string} htmlContent content in html file
 * @returns {string} return html content minify
 */
const htmlFormatter = (htmlContent) => {
  const regex = /(\sr\n|\n|\r)/gm;
  let isMultiLineComment = false;

  const htmlWithoutComment = htmlContent.split('\n').map((line) => {
    if (line.includes('<!--') && line.includes('-->')) {
      return removeInlineHtmlComment(line);
    } if (line.includes('<!--') && !line.includes('-->')) {
      isMultiLineComment = true;
    } else if (line.includes('-->')) {
      isMultiLineComment = false;
    } else if (!isMultiLineComment) {
      return line;
    }
  });

  return htmlWithoutComment.join('').replace(regex, '').split('  ').join('');
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
    createFile(htmlMinify, filesPathAndName, fileExtension, nomin);
  });
};

module.exports = {
  htmlFormatter,
  htmlMinifier,
};
