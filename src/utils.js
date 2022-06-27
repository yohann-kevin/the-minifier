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

/**
 * Check if file match with extension
 * @param {Object} filesInformation information of files contain name and path
 * @param {string} extension extension of file for match
 * @returns return file path if etension match else return false for not push path in array
 */
const checkFileExtension = (filesInformation, extension) => {
  const filesName = filesInformation.name.split('.');
  const filesExtension = filesName[filesName.length - 1];
  if (filesExtension === extension) return filesInformation.path;
  return false;
};

/**
 * return all file path sorted by extension
 * @param {Object} allPath object of all path in project contain name, path and children
 * @param {string} extension file extension
 * @returns {Array} all file path sorted by extension
 */
const searchFilePathByExtension = (allPath, extension) => {
  const allFilePathByExtension = [];

  const searchFile = (filesPath) => {
    filesPath.children.forEach((folderAndFiles) => {
      if (folderAndFiles.name !== 'node_modules' && folderAndFiles.name !== '.git') {
        if (Object.keys(folderAndFiles).length === 2) {
          const pathFileGoodExtension = checkFileExtension(folderAndFiles, extension);
          if (pathFileGoodExtension) allFilePathByExtension.push(pathFileGoodExtension);
        } else {
          searchFile(folderAndFiles);
        }
      }
    });
  };

  searchFile(allPath);
  return allFilePathByExtension;
};

module.exports = {
  extractFileName,
  createMinFile,
  overwriteFile,
  readFile,
  searchFilePathByExtension,
};
