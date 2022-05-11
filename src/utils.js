/**
 * extract path and name of css file
 * @param {string} path path of css file
 * @returns {string} path and name of css file without extension
 */

const extractFileName = (path) => {
  const pathSplited = path.split('.');
  pathSplited.pop();
  return pathSplited[0];
};

module.exports = { extractFileName };
