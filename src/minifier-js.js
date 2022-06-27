/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

const {
  extractFileName, createMinFile, overwriteFile, readFile,
} = require('./utils');

/**
 * remove comment in javascript content
 * @param {array} jsInline Array of javascript line by line
 * @returns {array} return Array of javascript without comment
 */
const removeCommentInJs = (jsInline) => {
  const jsWithoutComment = jsInline.map((elmnt) => {
    if (elmnt.replace(' ', '')[0] !== '*'
    && elmnt.split('  ')[0] !== '//'
    && elmnt !== '/**'
    && elmnt.split(' ')[0] !== '/*'
    && elmnt.split(' ')[0] !== '*'
    && elmnt.split(' ')[1] !== '*/'
    && elmnt.split('  ').join('').split(' ').indexOf('//') === -1
    ) {
      return elmnt.split('  ').join('');
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
    if (nomin) {
      overwriteFile(jsMinify, filePathAndName, fileExtension);
    } else {
      createMinFile(jsMinify, filePathAndName, fileExtension);
    }
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
    if (nomin) {
      overwriteFile(jsMinify, filePathAndName, fileExtension);
    } else {
      createMinFile(jsMinify, filePathAndName, fileExtension);
    }
  });
};

module.exports = {
  jsFormatter,
  removeCommentInJs,
  jsMinifier,
  tsMinifier,
};
