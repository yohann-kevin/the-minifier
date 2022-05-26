#!/usr/bin/env node
/* eslint-disable no-console */
// -*- js -*-

const commandLineUsage = require('command-line-usage');
const commandLineArgs = require('command-line-args');
const dirTree = require('directory-tree');

// path for development mode
const { minifierCommandLine } = require('../index');

const optionList = [
  {
    name: 'help',
    alias: 'h',
    type: Boolean,
    description: '🆘 Print this usage guide',
  },
  {
    name: 'all',
    alias: 'a',
    defaultOption: true,
    typeLabel: '{underline string}',
    description: '📝 Minify all project',
  },
  {
    name: 'css',
    alias: 'c',
    type: String,
    description: '🖌️  Minify all project css',
  },
  {
    name: 'html',
    alias: 'w',
    type: String,
    description: '🌐 Minify all project html',
  },
  {
    name: 'js',
    alias: 'j',
    type: String,
    description: '🚂 Minify all project javascript',
  },
  {
    name: 'ts',
    alias: 't',
    type: String,
    description: '🚆 Minify all project typescript',
  },
];

const usageNotes = [
  {
    header: '🗜️  Minify html, css and javascript',
    content: 'A light library to minify javascript, css and html easily',
  },
  {
    header: '⚙️  Options ⚙️',
    optionList,
  },
];

const usage = commandLineUsage(usageNotes);
const tsFilesPath = [];
const jsFilesPath = [];
const cssFilesPath = [];
const htmlFilesPath = [];
let options = null;

// TODO: refactor recursive method for search file path

/**
 * search file in project
 * @param {array} allPath array of all path in project
 */
function searchTsFile(allPath) {
  allPath.children.forEach((folderAndFiles) => {
    if (folderAndFiles.name !== 'node_modules' && folderAndFiles.name !== '.git') {
      if (Object.keys(folderAndFiles).length === 2) {
        const filesName = folderAndFiles.name.split('.');
        const filesExtension = filesName[filesName.length - 1];
        if (filesExtension === 'ts') tsFilesPath.push(folderAndFiles.path);
      } else {
        searchTsFile(folderAndFiles);
      }
    }
  });
}

function searchJsFile(allPath) {
  allPath.children.forEach((folderAndFiles) => {
    if (folderAndFiles.name !== 'node_modules' && folderAndFiles.name !== '.git') {
      if (Object.keys(folderAndFiles).length === 2) {
        const filesName = folderAndFiles.name.split('.');
        const filesExtension = filesName[filesName.length - 1];
        if (filesExtension === 'js') jsFilesPath.push(folderAndFiles.path);
      } else {
        searchJsFile(folderAndFiles);
      }
    }
  });
}

function searchCssFile(allPath) {
  allPath.children.forEach((folderAndFiles) => {
    if (folderAndFiles.name !== 'node_modules' && folderAndFiles.name !== '.git') {
      if (Object.keys(folderAndFiles).length === 2) {
        const filesName = folderAndFiles.name.split('.');
        const filesExtension = filesName[filesName.length - 1];
        if (filesExtension === 'css') cssFilesPath.push(folderAndFiles.path);
      } else {
        searchCssFile(folderAndFiles);
      }
    }
  });
}

function searchHtmlFile(allPath) {
  allPath.children.forEach((folderAndFiles) => {
    if (folderAndFiles.name !== 'node_modules' && folderAndFiles.name !== '.git') {
      if (Object.keys(folderAndFiles).length === 2) {
        const filesName = folderAndFiles.name.split('.');
        const filesExtension = filesName[filesName.length - 1];
        if (filesExtension === 'html') htmlFilesPath.push(folderAndFiles.path);
      } else {
        searchHtmlFile(folderAndFiles);
      }
    }
  });
}

// TODO: end todo

/**
 * search file path
 */
function searchPathFile() {
  const projectPath = dirTree('./');

  if (options.css) {
    searchCssFile(projectPath);
    options.cssPath = cssFilesPath;
  }

  if (options.html) {
    searchHtmlFile(projectPath);
    options.htmlPath = htmlFilesPath;
  }

  if (options.js) {
    searchJsFile(projectPath);
    options.jsPath = jsFilesPath;
  }

  if (options.ts) {
    searchTsFile(projectPath);
    options.tsPath = tsFilesPath;
  }

  // launch minifier
  minifierCommandLine(options);
}

/**
 * change all arg for true if all options is active
 */
function manageArgAll() {
  if (options.all) {
    options.html = true;
    options.css = true;
    options.javascirpt = true;
  }

  searchPathFile();
}

/**
 * initialize arg null to true
 */
function initArgsValue() {
  // eslint-disable-next-line no-restricted-syntax
  for (const arg in options) {
    if ({}.hasOwnProperty.call(options, arg)) {
      options[arg] = true;
    }
  }
  manageArgAll();
}

/**
 * launch and init program
 * @returns empty if args is empty
 */
function init() {
  try {
    options = commandLineArgs(optionList);
  } catch (e) {
    console.log(e);
    console.log(usage);
    return;
  }

  if (Object.keys(options).length === 0 || options.help) {
    console.log(usage);
  } else {
    initArgsValue();
  }
}

init();