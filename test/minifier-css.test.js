const fs = require('fs');

const {
  cssFormatter,
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

  it('should test css Formatter', () => {
    const cssFromat = cssFormatter(cssFileSample);
    expect(cssFromat).toBe(cssFormatSample);
  });

  it('should test css minifier without nomin options', () => {
    const pathTestFile = 'resources/css/test.css';
    const cssContentExpected = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    cssMinifier([pathTestFile], false);
    const cssContentAfterMinify = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    expect(cssContentAfterMinify).toBe(cssContentExpected);
  });

  it('should test css minifier with nomin options', () => {
    const pathTestFile = 'resources/css/test.css';
    const cssContentExpected = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    cssMinifier([pathTestFile], true);
    const cssContentAfterMinify = fs.readFileSync('./resources/css/test.min.css', 'utf-8');
    expect(cssContentAfterMinify).toBe(cssContentExpected);
  });
});
