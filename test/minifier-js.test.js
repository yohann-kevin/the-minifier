// const fs = require('fs');

const {
  jsMinifier,
} = require('../src/minifier-js');

describe('Test unit the js minifier methods', () => {
  const jsFilePath = 'resources/js/expect.js';

  it('should test js minifier', () => {
    jsMinifier([jsFilePath]);
  });
});
