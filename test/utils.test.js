const fs = require('fs');

const { extractFileName, createMinFile, readFile } = require('../src/utils');

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
    expect(checkFileExist).toBe(true);
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
