const fs = require('fs');

const {
  extractFileName, createMinFile, readFile, overwriteFile, searchFilePathByExtension,
} = require('../src/utils');
const { htmlFormatter } = require('../src/minifier-html');

describe('Test the html minifier', () => {
  const filePathSample = './resources/html/index.min.html';

  let htmlFormatSample;

  beforeEach(() => {
    htmlFormatSample = fs.readFileSync(filePathSample, 'utf-8');
  });

  it('should test extract path and file name method', () => {
    const pathWithFileExtension = '/html/index.html';
    const pathWithoutFileExtension = extractFileName(pathWithFileExtension);
    const pathExpected = '/html/index';
    expect(pathWithoutFileExtension).toBe(pathExpected);
  });

  it('should test html minfier create min file', () => {
    const testFilePath = './resources/html/create-min-file';
    createMinFile(htmlFormatSample, testFilePath, '.html');
    const checkFileExist = fs.existsSync(`${testFilePath}.min.html`);
    expect(checkFileExist).toBeTruthy();
  });

  it('should test method for overwrite files', () => {
    const content = fs.readFileSync('./resources/html/content.html', 'utf-8');
    const contentMinified = htmlFormatter(content);
    const testFilePath = './resources/html/over-write';
    overwriteFile(contentMinified, testFilePath, '.html');
    const checkFileExist = fs.existsSync(`${testFilePath}.html`);
    expect(checkFileExist).toBeTruthy();
  });

  it('should test method for read file', () => {
    const fileRead = readFile(filePathSample);
    expect(fileRead).toBe(htmlFormatSample);
  });

  it('should test error in method for read file', () => {
    expect(() => {
      readFile('./');
    }).toThrow();
  });

  it('should test method searchFileByExtension', () => {
    const allPath = {
      path: './',
      name: '.',
      children: [
        { path: '.eslintrc.js', name: '.eslintrc.js' },
        { path: 'package-lock.json', name: 'package-lock.json' },
        { path: 'package.json', name: 'package.json' },
        { path: 'index.js', name: 'index.js' },
        { path: 'CONTRIBUTING.md', name: 'CONTRIBUTING.md' },
        { path: 'README.md', name: 'README.md' },
        {
          path: 'dist',
          name: 'dist',
          children: [
            { path: 'dist/files.js', name: 'files.js' },
          ],
        },
      ],
    };

    const pathListExpected = [
      '.eslintrc.js',
      'index.js',
      'dist/files.js',
    ];

    const filesPathByExtension = searchFilePathByExtension(allPath, 'js');

    expect(filesPathByExtension).toStrictEqual(pathListExpected);
  });
});
