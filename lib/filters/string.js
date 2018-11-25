'use strict';

const qs = require('querystring');
const filters = exports = module.exports;
const isString = val => val && typeof val === 'string';

/**
 * String filters
 */

/**
 * Append to the end of string
 *
 * @param {String} input
 * @param {String} characters
 * @return {String}
 */

filters.append = function(str, characters) {
  return characters ? toString(str) + toString(characters) : str;
};

filters.append = function(str, suffix) {
  return isString(str) && isString(suffix) ? (str + suffix) : str;
};

/**
 * Combine to one camelized name
 *
 * @param {String} input
 * @return {String}
 */

filters.camelize = function(input) {
  input = toString(input);
  return input.replace(/[^a-zA-Z0-9]+(\w)/g, function(_, ch) {
    return ch.toUpperCase();
  });
};

/**
 * Combine to one capitalized name
 *
 * @param {String} input
 * @return {String}
 */

filters.capitalize = function(input) {
  input = toString(input);
  if (input.length < 1) return input;
  return input[0].toUpperCase() + input.substr(1);
};
filters.capitalize = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * To lowercase
 *
 * @param {String} input
 * @return {String}
 */

filters.downcase = function(input) {
  return toString(input).toLowerCase();
};
filters.downcase = function(str) {
  return isString(str) ? str.toLowerCase() : '';
};

filters.escape_querystring = function(str) {
  return isString(str) ? qs.escape(str) : '';
};

filters.escape_once = function(str) {
  return isString(str) ? qs.escape(str) : '';
};

filters.excerpt = function(str, options) {
  return str.slice(0, 150);
};

/**
 * Combine to hyphen separated word: 'this-is-a-book'
 *
 * @param {String} input
 * @return {String}
 */

filters.handleize = function(input) {
  return toString(input)
    .replace(/[^0-9a-zA-Z ]/g, '')
    .replace(/[ ]+/g, '-')
    .toLowerCase();
};

/**
 * Search a substring, return its index position
 *
 * @param {string|array} `val`
 * @param {Object} ele
 * @param {Number} startIndex
 * @return {Number}
 */

filters.indexOf = function(val, ele, startIndex) {
  if (!Array.isArray(val)) val = toString(val);
  return val.indexOf(ele, startIndex);
};

filters.lstrip = function(str) {
  return isString(str) ? str.replace(/^\s+/, '') : '';
};

/**
 * Replace all newline characters with "<br>"
 *
 * @param {String} input
 * @return {String}
 */

filters.newline_to_br = function(input) {
  return toString(input).replace(/\n/gm, '<br>');
};
filters.newline_to_br = function(str) {
  return isString(str) ? str.replace(/\n/gm, '<br>') : '';
};

/**
 * Prepend to the begining
 *
 * @param {String} input
 * @param {String} characters
 * @return {String}
 */

filters.prepend = function(input, characters) {
  return (characters ? toString(characters) : '') + toString(input);
};
filters.prepend = function(str = '', prefix = '') {
  return isString(str) && isString(prefix) ? (prefix + str) : str;
};

/**
 * Remove all occurrences of substring
 *
 * @param {String} input
 * @param {String} substring
 * @return {String}
 */

filters.remove = function(input, substring) {
  return filters.replace(input, substring, '');
};
filters.remove = function(str, ch) {
  return isString(str) ? str.split(ch).join('') : '';
};

/**
 * Remove the first occurrence of substring
 *
 * @param {String} input
 * @param {String} substring
 * @return {String}
 */

filters.remove_first = function(input, substring) {
  return filters.replace_first(input, substring, '');
};
filters.remove_first = function(str, a, b = '') {
  return isString(str) ? str.replace(a, b) : '';
};

/**
 * Replace all occurrences of substring with replacement
 *
 * @param {String} input
 * @param {String} substring
 * @param {String} replacement
 * @return {String}
 */

filters.replace = function(input, substring, replacement) {
  return input.split(substring).join(replacement);
};
filters.replace = function(str, a, b) {
  return isString(str) ? str.split(a).join(b) : '';
};

/**
 * Replace the first occurrence of substring with replacement
 *
 * @param {String} input
 * @param {String} substring
 * @param {String} replacement
 * @return {String}
 */

filters.replace_first = function(input, substring, replacement) {
  return toString(input).replace(substring, replacement);
};
filters.replace_first = function(str, a, b = '') {
  return isString(str) ? str.replace(a, b) : '';
};

/**
 * Reverse the characters in the string
 *
 * @param {string|array} arr
 * @return {string|array}
 */

filters.reverse = function(val) {
  if (!Array.isArray(val)) {
    val = toString(val).split('');
  }
  return val.reverse().join('');
};

filters.rstrip = function(str) {
  return isString(str) ? str.replace(/\s+$/, '') : '';
};

/**
 * Return the string length
 *
 * @param {array|string} input
 * @return {String}
 */

filters.size = function(input) {
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length;
  }
  return 0;
};

/**
 * Split the string at each occurrence of '-' (returns an array)
 *
 * @param {String} input
 * @param {String} delimiter
 * @return {String}
 */

filters.split = function(input, delim) {
  return delim ? toString(input).split(delim) : '';
};
filters.split = function(str, sep) {
  return isString(str) && isString(sep) ? str.split(sep) : str;
};

filters.strip = str => isString(str) ? str.trim() : '';

filters.strip_html = function(str) {
  return isString(str) ? str.replace(/<[^>]>/g, '') : '';
};

/**
 * Remove all newline characters
 *
 * @param {String} input
 * @return {String}
 */

filters.strip_newlines = function(input) {
  return toString(input).replace(/[\r\n]+/g, '');
};
filters.strip_newlines = function(str) {
  return isString(str) ? str.replace(/\n+/g, '') : '';
};

/**
 * Extracts parts of a string, beginning at the character at the specified posistion 'start',
 * and returns the specified number of characters 'length'.
 *
 * @param {String} input
 * @param {Number} start
 * @param {Number} length
 * @return {String}
 */

filters.substr = function(input, start, length) {
  return toString(input).substr(start, length);
};

/**
 * Return only the first N characters
 *
 * @param {String} input
 * @param {Number} n
 * @return {String}
 */

filters.truncate = function(input, n) {
  n = parseInt(n, 10);
  if (!isFinite(n) || n < 0) n = 100;
  return toString(input).substr(0, n);
};
filters.truncate = function(str, count = str.length, suffix) {
  const res = str.slice(0, +count);
  if (isString(suffix)) {
    return res + suffix;
  }
  return res + '…';
};

/**
 * Return only the first N words
 *
 * @param {String} input
 * @param {Number} n
 * @return {String}
 */

filters.truncatewords = function(input, n) {
  n = parseInt(n, 10);
  if (!isFinite(n) || n < 0) n = 15;
  return toString(input).trim().split(/ +/).slice(0, n).join(' ');
};
filters.truncateWords = function(str, count, suffix) {
  var res = str.split(/[ \t]/).slice(0, +count);
  var val = res.join(' ');
  if (isString(suffix)) {
    return val + suffix;
  }
  return val + '…';
};

/**
 * To uppercase
 *
 * @param {String} input
 * @return {String}
 */

filters.upcase = function(input) {
  return toString(input).toUpperCase();
};
filters.upcase = function(str) {
  return isString(str) ? str.toUpperCase() : '';
};

filters.url_decode = function(str) {
  return isString(str) ? decodeURIComponent(str) : '';
};

filters.url_encode = function(str) {
  return isString(str) ? encodeURIComponent(str) : '';
};
