const fs = require('fs');

const {
  jsMinifier, jsFormatter,
} = require('../src/minifier-js');

describe('Test unit the js minifier methods', () => {
  const jsFilePathSample = 'resources/js/expect.js';

  let jsFileSample;
  let jsFormatSample;

  beforeEach(() => {
    jsFileSample = fs.readFileSync(jsFilePathSample, 'utf-8');
    jsFormatSample = fs.readFileSync('./resources/js/expect.min.js', 'utf-8');
  });

  it('should test js formatter', () => {
    const jsFormat = jsFormatter(jsFileSample);
    expect(jsFormat).toBe(jsFormatSample);
  });

  it('should test js minifier', () => {
    jsMinifier([jsFilePathSample]);
    const jsContentAfterMinify = fs.readFileSync('./resources/js/expect.min.js', 'utf-8');
    expect(jsContentAfterMinify).toBe(jsFormatSample);
  });
});
