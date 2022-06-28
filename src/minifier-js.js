/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

const {
  extractFileName, createFile, readFile,
} = require('./utils');

/**
 * remove one line comment
 * @param {string} line line of js
 * @returns {array} arrar of js line without comment
 */
const removeOneLineComment = (line) => {
  const elmntWithoutSpace = line.split(' ').filter((item) => item !== '');
  const indexOfCommentStart = elmntWithoutSpace.indexOf('//');
  if (indexOfCommentStart !== 0) {
    return elmntWithoutSpace.slice(0, indexOfCommentStart).join(' ');
  }
};

/**
 * remove comment in javascript content
 * @param {array} jsInline Array of javascript line by line
 * @returns {array} return Array of javascript without comment
 */
const removeCommentInJs = (jsInline) => {
  let isInMultiLineComment = false;

  const jsWithoutComment = jsInline.map((line) => {
    if (line.includes('//')) {
      return removeOneLineComment(line);
    }
    if (!line.includes('//')) {
      // manage multi line comment
      const commentMultiLineStart = line.includes('/**') || line.split(' ')[0].includes('/*');
      if (commentMultiLineStart && line.split(' ').indexOf('*/') === -1) isInMultiLineComment = true;
      if (!commentMultiLineStart) {
        if (line.split(' ').indexOf('*/') !== -1 && isInMultiLineComment) isInMultiLineComment = false;
        if (!isInMultiLineComment && line.split(' ').indexOf('*/') === -1) return line.split('  ').join('');
      }
    }
  });
  return jsWithoutComment;
};

/**
 * minify js content
 * @param {string} jsContent content in js file
 * @returns {string} return js content minify
 */
const jsFormatter = (jsContent) => {
  const jsInline = jsContent.split('\n');
  const jsWithoutComment = removeCommentInJs(jsInline);
  return jsWithoutComment.join('').replace(/\s\s+/g, '');
};

/**
 * chore function of js minifier
 * @param {Array} jsFilesPath path of js files in project
 * @param {Boolean} nomin manage no min file options
 */
const jsMinifier = (jsFilesPath, nomin) => {
  jsFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const js = readFile(filePath);
    const jsMinify = jsFormatter(js);
    const fileExtension = '.js';
    createFile(jsMinify, filePathAndName, fileExtension, nomin);
  });
};

/**
 * chore function of ts minifier
 * @param {Array} jsFilesPath path of ts files in project
 * @param {Boolean} nomin manage no min file options
 */
const tsMinifier = (jsFilesPath, nomin) => {
  jsFilesPath.forEach((filePath) => {
    const filePathAndName = extractFileName(filePath);
    const js = readFile(filePath);
    const jsMinify = jsFormatter(js);
    const fileExtension = '.ts';
    createFile(jsMinify, filePathAndName, fileExtension, nomin);
  });
};

module.exports = {
  jsFormatter,
  removeOneLineComment,
  removeCommentInJs,
  jsMinifier,
  tsMinifier,
};
