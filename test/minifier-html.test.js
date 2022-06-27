const fs = require('fs');

const {
  htmlFormatter,
  htmlMinifier,
} = require('../src/minifier-html');

describe('Test the html minifier', () => {
  const filePath = 'resources/html/index.html';

  let htmlFileSample;
  let htmlFormatSample;

  beforeEach(() => {
    htmlFileSample = fs.readFileSync(filePath, 'utf8');
    htmlFormatSample = fs.readFileSync('./resources/html/index.min.html', 'utf-8');
  });

  it('should test html Formatter', () => {
    const htmlFromat = htmlFormatter(htmlFileSample);
    expect(htmlFromat).toBe(htmlFormatSample);
  });

  it('should test js minifier without nomin options', () => {
    htmlMinifier([filePath], false);
    const htmlContentAfterMinify = fs.readFileSync('./resources/html/index.min.html', 'utf-8');
    expect(htmlContentAfterMinify).toBe(htmlFormatSample);
  });

  it('should test js minifier with nomin options', () => {
    htmlMinifier([filePath], true);
    const htmlContentAfterMinify = fs.readFileSync('./resources/html/index.min.html', 'utf-8');
    expect(htmlContentAfterMinify).toBe(htmlFormatSample);
  });
});
