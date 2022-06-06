const { cssMinifier } = require('./src/minifier-css');
const { htmlMinifier } = require('./src/minifier-html');
const { jsMinifier, tsMinifier } = require('./src/minifier-js');
const { manageDistOptions, manageLanguageOptions, manageExcludeOptions } = require('./src/configFiles');

const manageConfigOptions = (configOptions) => {
  if ('dist' in configOptions) {
    manageDistOptions();
  }

  if ('language' in configOptions) {
    manageLanguageOptions(configOptions.language);
  }

  if ('exclude' in configOptions) {
    manageExcludeOptions(configOptions.exclude);
  }
};

const minifierCommandLine = (args) => {
  if (args.config) {
    manageConfigOptions(args.config);
  } else {
    if (args.css) {
      cssMinifier(args.cssPath);
    }

    if (args.html) {
      htmlMinifier(args.htmlPath);
    }

    if (args.js) {
      jsMinifier(args.jsPath);
    }

    if (args.ts) {
      tsMinifier(args.tsPath);
    }
  }
};

module.exports = { minifierCommandLine };
