'use strict';

const path = require('path');

/**
 * TODO
 */

exports.relative_url = str => {
  return path.normalize(path.join('./', str));
};

exports.absolute_url = str => {
  return path.normalize(path.join('./', str));
};
