#!/usr/bin/env node
/* eslint-disable no-console */
// -*- js -*-

const commandLineUsage = require('command-line-usage');
const commandLineArgs = require('command-line-args');
const dirTree = require('directory-tree');
const pjson = require('../package.json');
const { searchFilePathByExtension } = require('../src/utils');

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
    type: Boolean,
    description: '📝 Minify all project',
  },
  {
    name: 'css',
    alias: 'c',
    type: Boolean,
    description: '🖌️ Minify all project css',
  },
  {
    name: 'html',
    alias: 'w',
    type: Boolean,
    description: '🌐 Minify all project html',
  },
  {
    name: 'js',
    alias: 'j',
    type: Boolean,
    description: '🚂 Minify all project javascript',
  },
  {
    name: 'ts',
    alias: 't',
    type: Boolean,
    description: '🚆 Minify all project typescript',
  },
  {
    name: 'no-min',
    alias: 'n',
    type: Boolean,
    description: '❌ Does not generate a .min file but overwrites existing files',
  },
  {
    name: 'version',
    alias: 'v',
    type: Boolean,
    description: '🔍 View current install version',
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
let options = {};

/**
 * search file path
 */
function searchPathFile() {
  const projectPath = dirTree('./');
  const nomin = !!options['no-min'];
  options.nomin = nomin;

  if (nomin) delete options['no-min'];

  if (options.css) {
    options.cssPath = searchFilePathByExtension(projectPath, 'css');
  }

  if (options.html) {
    options.htmlPath = searchFilePathByExtension(projectPath, 'html');
  }

  if (options.js) {
    options.jsPath = searchFilePathByExtension(projectPath, 'js');
  }

  if (options.ts) {
    options.tsPath = searchFilePathByExtension(projectPath, 'ts');
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
  } else if (options.version) {
    const versionMsg = `the-minifier ${pjson.version}`;
    console.log(versionMsg);
  } else {
    initArgsValue();
  }
}

init();
