const { extractFileName } = require('../src/utils');

describe('Test the html minifier', () => {
  it('should test extract path and file name method', () => {
    const pathWithFileExtension = '/html/index.html';
    const pathWithoutFileExtension = extractFileName(pathWithFileExtension);
    const pathExpected = '/html/index';
    expect(pathWithoutFileExtension).toBe(pathExpected);
  });
});
