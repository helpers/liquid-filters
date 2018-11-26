'use strict';

const qs = require('querystring');
const { isString } = require('../utils');

exports.escape_once = str => {
  return isString(str) ? qs.escape(str) : '';
};

exports.escape_querystring = str => {
  return isString(str) ? qs.escape(str) : '';
};

exports.url_decode = str => {
  return isString(str) ? decodeURIComponent(str) : '';
};

exports.url_encode = str => {
  return isString(str) ? encodeURIComponent(str) : '';
};
