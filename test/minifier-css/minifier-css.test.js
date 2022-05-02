const fs = require('fs');

const {
  cssFormatter,
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

  it('should test css Formatter', () => {
    const cssFromat = cssFormatter(cssFileSample);
    expect(cssFromat).toBe(cssFormatSample);
  });
});
