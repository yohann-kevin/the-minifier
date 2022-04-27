const fs = require('fs');

const {
  cssFormatter,
  readCssFile,
} = require('../../src/minifier-css/minifierCss');

describe('Test the css minifier', () => {
  let cssFileSample;
  let cssFormatSample;
  beforeEach(() => {
    cssFileSample = fs.readFileSync('./resources/css/index.css', 'utf8');
    cssFormatSample = fs.readFileSync('./resources/css/index.min.css', 'utf-8');
  });

  it('should test css file reader', () => {
    const fileRead = readCssFile();
    expect(fileRead).toBe(cssFileSample);
  });

  it('should test css Formatter', () => {
    const cssFromat = cssFormatter(cssFileSample);
    expect(cssFromat).toBe(cssFormatSample);
  });
});
