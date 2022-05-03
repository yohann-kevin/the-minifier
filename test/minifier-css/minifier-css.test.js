const fs = require('fs');

const {
  cssFormatter,
  extractFileName,
  readCssFile,
} = require('../../src/minifier-css/minifier-css');

describe('Test the css minifier', () => {
  const filePath = './resources/css/index.css';

  let cssFileSample;
  let cssFormatSample;

  beforeEach(() => {
    cssFileSample = fs.readFileSync(filePath, 'utf8');
    cssFormatSample = fs.readFileSync('./resources/css/index.min.css', 'utf-8');
  });

  it('should test css file reader', () => {
    const fileRead = readCssFile(filePath);
    expect(fileRead).toBe(cssFileSample);
  });

  it('should test css file reader error', () => {
    expect(() => {
      readCssFile('./');
    }).toThrow();
  });

  it('should test css Formatter', () => {
    const cssFromat = cssFormatter(cssFileSample);
    expect(cssFromat).toBe(cssFormatSample);
  });

  it('should test extract path and file name method', () => {
    const pathWithFileExtension = '/style/index.css';
    const pathWithoutFileExtension = extractFileName(pathWithFileExtension);
    const pathExpected = '/style/index';
    expect(pathWithoutFileExtension).toBe(pathExpected);
  });
});
