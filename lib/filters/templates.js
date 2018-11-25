'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Include
 */

exports.include = (filename, options = {}) => {
  const opts = Object.assign({ cwd: process.cwd() }, options);
  const filepath = path.join(opts.cwd, filename);
  return fs.readFileSync(filepath, 'utf8');
};

exports.partial = (name, options = {}) => {
  return options.partials ? (options.partials[name] || '') : '';
};
