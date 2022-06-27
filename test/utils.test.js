const fs = require('fs');

const {
  extractFileName, createMinFile, readFile, overwriteFile,
} = require('../src/utils');
const { htmlFormatter } = require('../src/minifier-html');

describe('Test the html minifier', () => {
  const filePathSample = './resources/html/index.min.html';

  let htmlFormatSample;

  beforeEach(() => {
    htmlFormatSample = fs.readFileSync(filePathSample, 'utf-8');
  });

  it('should test extract path and file name method', () => {
    const pathWithFileExtension = '/html/index.html';
    const pathWithoutFileExtension = extractFileName(pathWithFileExtension);
    const pathExpected = '/html/index';
    expect(pathWithoutFileExtension).toBe(pathExpected);
  });

  it('should test html minfier create min file', () => {
    const testFilePath = './resources/html/create-min-file';
    createMinFile(htmlFormatSample, testFilePath, '.html');
    const checkFileExist = fs.existsSync(`${testFilePath}.min.html`);
    expect(checkFileExist).toBeTruthy();
  });

  it('should test method for overwrite files', () => {
    const content = fs.readFileSync('./resources/html/content.html', 'utf-8');
    const contentMinified = htmlFormatter(content);
    const testFilePath = './resources/html/over-write';
    overwriteFile(contentMinified, testFilePath, '.html');
    const checkFileExist = fs.existsSync(`${testFilePath}.html`);
    expect(checkFileExist).toBeTruthy();
  });

  it('should test method for read file', () => {
    const fileRead = readFile(filePathSample);
    expect(fileRead).toBe(htmlFormatSample);
  });

  it('should test error in method for read file', () => {
    expect(() => {
      readFile('./');
    }).toThrow();
  });
});
