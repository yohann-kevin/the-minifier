const fs = require('fs');

const {
  jsMinifier, jsFormatter, tsMinifier,
} = require('../src/minifier-js');

describe('Test unit the js minifier methods', () => {
  const jsFilePathSample = 'resources/js/expect.js';
  const tsFilePathSample = 'resources/ts/expect.ts';

  let jsFileSample;
  let jsFormatSample;
  let tsFormatSample;

  beforeEach(() => {
    jsFileSample = fs.readFileSync(jsFilePathSample, 'utf-8');
    jsFormatSample = fs.readFileSync('./resources/js/expect.min.js', 'utf-8');
    tsFormatSample = fs.readFileSync('./resources/ts/expect.min.ts', 'utf-8');
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

  it('should test ts minifier for typescript', () => {
    tsMinifier([tsFilePathSample]);
    const tsContentAfterMinify = fs.readFileSync('./resources/ts/expect.min.ts', 'utf-8');
    expect(tsContentAfterMinify).toBe(tsFormatSample);
  });
});
