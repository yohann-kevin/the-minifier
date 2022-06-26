const fs = require('fs');
const logger = require('pino')();

/**
 * extract path and name of file
 * @param {string} path path of file
 * @returns {string} path and name of file without extension
 */
const extractFileName = (path) => {
  const pathSplited = path.split('.');
  pathSplited.pop();
  return pathSplited[0];
};

/**
 * create new fileName.min.{exention}
 * @param {string} contentMinify css content minify
 * @param {string} filePathAndName path and name of filesPath
 * @param {string} extension extension files css // html
 */
const createMinFile = (contentMinify, filePathAndName, extension) => {
  try {
    fs.writeFileSync(`${filePathAndName}.min${extension}`, contentMinify);
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

/**
 * Delete and rewrite files with content minify
 * @param {string} contentMinify css content minify
 * @param {string} filePathAndName path and name of filesPath
 * @param {string} extension extension files css // html
 */
const overwriteFile = (contentMinify, filePathAndName, extension) => {
  try {
    fs.writeFileSync(`${filePathAndName}${extension}`, contentMinify);
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

/**
 * read file with file path
 * @param {string} filesPath path of file
 * @returns {string} return cotent in file
 */
const readFile = (filesPath) => {
  try {
    return fs.readFileSync(filesPath, 'utf8');
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

module.exports = {
  extractFileName,
  createMinFile,
  overwriteFile,
  readFile,
};
