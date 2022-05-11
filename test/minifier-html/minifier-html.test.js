const fs = require('fs');

const {
  htmlFormatter,
  readHtmlFile,
  createHtmlMinFile,
  extractFileName,
} = require('../../src/minifier-html/minifier-html');

describe('Test the html minifier', () => {
  const filePath = './resources/html/index.html';

  let htmlFileSample;
  let htmlFormatSample;

  beforeEach(() => {
    htmlFileSample = fs.readFileSync(filePath, 'utf8');
    htmlFormatSample = fs.readFileSync('./resources/html/index.min.html', 'utf-8');
  });

  it('should test html file reader', () => {
    const fileRead = readHtmlFile(filePath);
    expect(fileRead).toBe(htmlFileSample);
  });

  it('should test html file reader error', () => {
    expect(() => {
      readHtmlFile('./');
    }).toThrow();
  });

  it('should test html minfier create min file', () => {
    const testFilePath = './resources/html/create-min-file';
    createHtmlMinFile(htmlFormatSample, testFilePath);
    const checkFileExist = fs.existsSync(`${testFilePath}.min.html`);
    expect(checkFileExist).toBe(true);
  });

  it('should test html create min file return error', () => {
    expect(() => {
      createHtmlMinFile();
    }).toThrow();
  });

  it('should test html Formatter', () => {
    const htmlFromat = htmlFormatter(htmlFileSample);
    expect(htmlFromat).toBe(htmlFormatSample);
  });

  it('should test extract path and file name method', () => {
    const pathWithFileExtension = '/html/index.html';
    const pathWithoutFileExtension = extractFileName(pathWithFileExtension);
    const pathExpected = '/html/index';
    expect(pathWithoutFileExtension).toBe(pathExpected);
  });
});
