const fs = require('fs');

const {
  htmlFormatter,
  readHtmlFile,
} = require('../../src/minifier-html/minifierHtml');

describe('Test the html minifier', () => {
  let htmlFileSample;
  let htmlFormatSample;
  beforeEach(() => {
    htmlFileSample = fs.readFileSync('./resources/html/index.html', 'utf8');
    htmlFormatSample = fs.readFileSync('./resources/html/index.min.html', 'utf-8');
  });

  it('should test css file reader', () => {
    const fileRead = readHtmlFile();
    expect(fileRead).toBe(htmlFileSample);
  });

  it('should test css Formatter', () => {
    const htmlFromat = htmlFormatter(htmlFileSample);
    expect(htmlFromat).toBe(htmlFormatSample);
  });
});
