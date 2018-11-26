'use strict';

/**
 * String Filters
 */

const { isString, toString } = require('../utils');

/**
 * Append to the end of string
 *
 * @param {String} input String to be appended.
 * @param {String} chars Characters to append.
 * @return {String}
 */

exports.append = (val, str) => toString(val) + toString(str);
exports.append = (str, chars) => {
  return chars ? toString(str) + toString(chars) : str;
};
exports.append = (str, suffix) => {
  return isString(str) && isString(suffix) ? str + suffix : str;
};

/**
 * Combine to one camelized name
 *
 * @param {String} input
 * @return {String}
 */

exports.camelize = input => {
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

exports.capitalize = input => {
  input = toString(input);
  if (input.length === 0) return '';
  if (input.length === 1) return input.toUpperCase();
  return input[0].toUpperCase() + input.substr(1);
};
exports.capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

/**
 * To lowercase
 *
 * @param {String} input
 * @return {String}
 */

exports.downcase = val => toString(val).toLowerCase();
exports.downcase = input => {
  return toString(input).toLowerCase();
};
exports.downcase = str => {
  return isString(str) ? str.toLowerCase() : '';
};

exports.excerpt = (str, options) => {
  return str.slice(0, 150);
};

/**
 * Combine to hyphen separated word: 'this-is-a-book'
 *
 * @param {String} input
 * @return {String}
 */

exports.handleize = input => {
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

exports.indexOf = (val, ele, startIndex) => {
  if (!Array.isArray(val)) val = toString(val);
  return val.indexOf(ele, startIndex);
};

exports.lstrip = str => {
  return isString(str) ? str.replace(/^\s+/, '') : '';
};

/**
 * Replace all newline characters with "<br>"
 *
 * @param {String} input
 * @return {String}
 */

exports.newline_to_br = val => {
  return toString(val).replace(/\n/g, '<br/>\n');
};
exports.newline_to_br = input => {
  return toString(input).replace(/\n/gm, '<br>');
};
exports.newline_to_br = str => {
  return isString(str) ? str.replace(/\n/gm, '<br>') : '';
};

/**
 * Prepend to the begining
 *
 * @param {String} input
 * @param {String} characters
 * @return {String}
 */

exports.prepend = (val, str) => toString(str) + toString(val);
exports.prepend = (input, characters) => {
  return (characters ? toString(characters) : '') + toString(input);
};
exports.prepend = (str = '', prefix = '') => {
  return isString(str) && isString(prefix) ? prefix + str : str;
};

/**
 * Remove all occurrences of substring
 *
 * @param {String} input
 * @param {String} substring
 * @return {String}
 */

exports.remove = (val, str) => {
  return toString(val).replace(new RegExp(str, 'g'), '');
};
exports.remove = (input, substring) => {
  return exports.replace(input, substring, '');
};
exports.remove = (str, ch) => {
  return isString(str) ? str.split(ch).join('') : '';
};

/**
 * Remove the first occurrence of substring
 *
 * @param {String} input
 * @param {String} substring
 * @return {String}
 */

exports.remove_first = (val, str) => toString(val).replace(str, '');
exports.remove_first = (input, substring) => {
  return exports.replace_first(input, substring, '');
};
exports.remove_first = (str, a, b = '') => {
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

exports.replace = (val, str, replacement = '') => {
  return toString(val).replace(new RegExp(str, 'g'), toString(replacement));
};
exports.replace = (input, substring, replacement) => {
  return input.split(substring).join(replacement);
};
exports.replace = (str, a, b) => {
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

exports.replace_first = (val, str, replacement = '') => {
  return toString(val).replace(new RegExp(str, ''), toString(replacement));
};
exports.replace_first = (input, substring, replacement) => {
  return toString(input).replace(substring, replacement);
};
exports.replace_first = (str, a, b = '') => {
  return isString(str) ? str.replace(a, b) : '';
};

/**
 * Reverse the characters in the string
 *
 * @param {string|array} arr
 * @return {string|array}
 */

exports.reverse = val => {
  if (!Array.isArray(val)) {
    val = toString(val).split('');
  }
  return val.reverse().join('');
};

exports.rstrip = str => {
  return isString(str) ? str.replace(/\s+$/, '') : '';
};

/**
 * Return the string length
 *
 * @param {array|string} input
 * @return {String}
 */

exports.size = input => {
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

exports.split = (str, separator = ' ') => str.split(separator);
exports.split = (input, delim) => {
  return delim ? toString(input).split(delim) : '';
};
exports.split = (str, sep) => {
  return isString(str) && isString(sep) ? str.split(sep) : str;
};

exports.strip = str => (isString(str) ? str.trim() : '');
exports.strip_html = val => toString(val).replace(/<.*?>/g, '');
exports.strip_newlines = val => toString(val).replace(/\n/g, '');
exports.strip_html = str => {
  return isString(str) ? str.replace(/<[^>]>/g, '') : '';
};

/**
 * Remove all newline characters
 *
 * @param {String} input
 * @return {String}
 */

exports.strip_newlines = input => {
  return toString(input).replace(/[\r\n]+/g, '');
};
exports.strip_newlines = str => {
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

exports.substr = (input, start, length) => {
  return toString(input).substr(start, length);
};

/**
 * Return only the first N characters
 *
 * @param {String} input
 * @param {Number} n
 * @return {String}
 */

exports.truncate = (input, n) => {
  n = parseInt(n, 10);
  if (!isFinite(n) || n < 0) n = 100;
  return toString(input).substr(0, n);
};
exports.truncate = (str, count = str.length, suffix) => {
  const res = str.slice(0, +count);
  if (isString(suffix)) {
    return res + suffix;
  }
  return res + '…';
};

exports.truncate = (val, length = 50, str = '...') => {
  if (!val) return '';
  return val.length > length ? val.slice(0, length) + str : val;
};

/**
 * Return only the first N words
 *
 * @param {String} input
 * @param {Number} n
 * @return {String}
 */

exports.truncatewords = (input, n) => {
  n = parseInt(n, 10);
  if (!isFinite(n) || n < 0) n = 15;
  return toString(input).trim().split(/ +/).slice(0, n).join(' ');
};
exports.truncateWords = (str, count, suffix) => {
  var res = str.split(/[ \t]/).slice(0, +count);
  var val = res.join(' ');
  if (isString(suffix)) {
    return val + suffix;
  }
  return val + '…';
};
exports.truncatewords = (val, words, str = '...') => {
  if (!val) return '';
  let list = toString(val).split(' ');
  let int = parseInt(words || 15, 10);
  let l = Math.max(int, 0);
  return list.length > l ? list.slice(0, l).join(' ') + str : val;
};
exports.truncate_words = exports.truncatewords;

/**
 * To uppercase
 *
 * @param {String} input
 * @return {String}
 */

exports.upcase = str => isString(str) ? str.toUpperCase() : '';
