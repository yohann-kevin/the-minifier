const fs = require('fs');

const {
  jsMinifier, jsFormatter, tsMinifier, removeCommentInJs, removeOneLineComment,
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

  it('should test js minifier without nomin options', () => {
    jsMinifier([jsFilePathSample], false);
    const jsContentAfterMinify = fs.readFileSync('./resources/js/expect.min.js', 'utf-8');
    expect(jsContentAfterMinify).toBe(jsFormatSample);
  });

  it('should test js minifier with nomin options', () => {
    jsMinifier([jsFilePathSample], true);
    const jsContentAfterMinify = fs.readFileSync('./resources/js/expect.min.js', 'utf-8');
    expect(jsContentAfterMinify).toBe(jsFormatSample);
  });

  it('should test ts minifier for typescript without nomin options', () => {
    tsMinifier([tsFilePathSample], false);
    const tsContentAfterMinify = fs.readFileSync('./resources/ts/expect.min.ts', 'utf-8');
    expect(tsContentAfterMinify).toBe(tsFormatSample);
  });

  it('should test ts minifier for typescript with nomin options', () => {
    tsMinifier([tsFilePathSample], true);
    const tsContentAfterMinify = fs.readFileSync('./resources/ts/expect.min.ts', 'utf-8');
    expect(tsContentAfterMinify).toBe(tsFormatSample);
  });

  it('should tets method removeCommentInJs', () => {
    const jsInlineSample = [
      '// extract path and name of file',
      'const extractFileName = (path) => {',
      "  const pathSplited = path.split('.');",
      '  pathSplited.pop();',
      '  return pathSplited[0];',
      '};',
      '',
      '/*',
      'plop',
      'plop',
      '*/',
      '',
      '/**',
      ' * read file with file path',
      ' * @param {string} filesPath path of file',
      ' * @returns {string} return cotent in file',
      ' */',
      'const readFile = (filesPath) => {',
      '  try {',
      "    return fs.readFileSync(filesPath, 'utf8'); // comment inline",
      '  } catch (err) {',
      '    logger.error(err);',
      '    throw err;',
      '  }',
      '};',
    ];

    const jsWithoutCommentExpected = [
      undefined,
      'const extractFileName = (path) => {',
      "const pathSplited = path.split('.');",
      'pathSplited.pop();',
      'return pathSplited[0];',
      '};',
      '',
      undefined,
      undefined,
      undefined,
      undefined,
      '',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      'const readFile = (filesPath) => {',
      'try {',
      "return fs.readFileSync(filesPath, 'utf8');",
      '} catch (err) {',
      'logger.error(err);',
      'throw err;',
      '}',
      '};',
    ];

    const jsWithCommentRemoved = removeCommentInJs(jsInlineSample);

    expect(jsWithCommentRemoved).toStrictEqual(jsWithoutCommentExpected);
  });

  it('should test method removing one line comment', () => {
    const lineCommentStartSample = '// comment in start of line';
    const lineCommentMiddleSample = 'return a * b // comment start in line';
    const lineCommentMiddleExpected = 'return a * b';

    const lineWithCommentStartRemoved = removeOneLineComment(lineCommentStartSample);
    const lineWithCommentMiddleRemoved = removeOneLineComment(lineCommentMiddleSample);

    expect(lineWithCommentStartRemoved).toBe(undefined);
    expect(lineWithCommentMiddleRemoved).toBe(lineCommentMiddleExpected);
  });
});
