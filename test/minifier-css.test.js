const fs = require('fs');

const {
  cssFormatter,
  createCssMinFile,
  readCssFile,
  cssMinifier,
} = require('../src/minifier-css');

describe('Test unit the css minifier methods', () => {
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

  it('should test css create min file return error', () => {
    expect(() => {
      createCssMinFile();
    }).toThrow();
  });

  it('should test css Formatter', () => {
    const cssFromat = cssFormatter(cssFileSample);
    expect(cssFromat).toBe(cssFormatSample);
  });

  it('should test css minifier', () => {
    const pathTestFile = 'resources/css/test.css';
    const cssContentExpected = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    cssMinifier([pathTestFile]);
    const cssContentAfterMinify = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    expect(cssContentAfterMinify).toBe(cssContentExpected);
  });
});
