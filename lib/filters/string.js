'use strict';

/**
 * String Filters
 */

const { isString, toString } = require('../utils');
const trimStart = String.prototype.trimStart;
const trimEnd = String.prototype.trimEnd;

/**
 * Appends `suffix` to the end of the given string.
 *
 * @param {String} str String to be appended.
 * @param {String} suffix Characters to append.
 * @return {String}
 */

exports.append = (str, suffix) => toString(str) + toString(suffix);

/**
 * Returns a camelcase string.
 *
 * @param {String} str
 * @return {String}
 */

exports.camelize = str => {
  return toString(str).replace(/[^a-zA-Z0-9]+(\w)/g, (m, v) => v.toUpperCase());
};

/**
 * Returns a capitalized string.
 *
 * @param {String} str The string to capitalize.
 * @return {String}
 */

exports.capitalize = input => {
  let str = toString(input);
  if (str.length === 0) return '';
  if (str.length === 1) return str.toUpperCase();
  return str[0].toUpperCase() + str.substr(1);
};

/**
 * Returns a lowercase string. Alias for [string.lowercase()](#lowercase).
 *
 * @param {String} str
 * @return {String}
 */

exports.downcase = exports.lowercase;

/**
 * Truncate a string to the specified `length`, and append
 * it with an elipsis, `…`.
 *
 * ```html
 * {{ "<span>foo bar baz</span>" | ellipsis: 7 }}
 * <!-- Results in: 'foo bar…' -->
 * ```
 * @param  {String} str
 * @param  {Number} length The desired length of the returned string.
 * @param  {String} suffix (optional) Custom characters to append. Default is `…`.
 * @return {String} The truncated string.
 * @api public
 */

exports.ellipsis = (str, len, suffix) => {
  return isString(str) ? (exports.truncate(str, len) + (suffix || '…')) : '';
};

/**
 * Return an excerpt from the given string.
 * Todo: strip markdown and HTML chars.
 *
 * @param {String} str
 * @return {String}
 */

exports.excerpt = (str, len = 150) => {
  // this is a placeholder for better logic
  return str.slice(0, len);
};

/**
 * Combine to hyphen separated word: 'this-is-a-book'
 *
 * @param {String} str
 * @return {String}
 */

exports.handleize = str => {
  return toString(str)
    .replace(/[^0-9a-zA-Z\s]/g, '')
    .replace(/[^\S\n]+/g, '-')
    .toLowerCase();
};

/**
 * Return the index of `ele` from the given `value`.
 *
 * @param {String|Array} value
 * @param {Object} ele
 * @param {Number} startIndex
 * @return {Number}
 */

exports.indexOf = (value, ele, startIndex) => {
  if (Array.isArray(value) || typeof value === 'string') {
    return value.indexOf(ele, startIndex);
  }
  return -1;
};

/**
 * Returns a lowercase string. Alias for [string.downcase()](#downcase).
 *
 * @param {String} str
 * @return {String}
 */

exports.lowercase = str => {
  return isString(str) ? str.toLowerCase() : '';
};

/**
 * Removes whitespace from the beginning of the given string.
 * Alias for [string.trimStart()](#trimStart).
 *
 * @param {String} str
 * @return {String}
 */

exports.lstrip = exports.trim_start;

/**
 * Replaces all newline characters with `<br>`.
 *
 * @param {String} str
 * @return {String}
 */

exports.newline_to_br = str => {
  return isString(str) ? str.replace(/\n/g, '<br>') : '';
};

/**
 * Pads the given string with another string until the resulting
 * string reaches the specified maximum length. The padding is
 * applied from the end (right) of the current string.
 *
 * ```js
 * <!-- Signature: string.pad_end(str, maxLength[, padString]) -->
 * Liquid:     {{ "Foo" | pad_end: 10, "0" }}
 * Handlebars: {{pad_end "Foo" 10 "0"}}
 * ejs:        <%= pad_end("Foo", 10, "0") %>
 * <!-- Results in: 'Foo0000000' -->
 * ```
 * @param {String} str
 * @param {String} maxLength
 * @param {String} padString
 * @return {String}
 * @api public
 */

exports.pad_end = (str, maxLength, padStr) => {
  return str.padEnd(maxLength, padStr);
};

/**
 * Pads the given string with another string until the resulting
 * string reaches the specified maximum length. The padding is
 * applied from the beginning (left) of the current string.
 *
 * ```js
 * <!-- Signature: string.pad_start(str, maxLength[, padString]) -->
 * Liquid:     {{ "Foo" | pad_start: 10, "0" }}
 * Handlebars: {{pad_start "Foo" 10 "0"}}
 * ejs:        <%= pad_start("Foo", 10, "0") %>
 * <!-- Results in: '0000000Foo' -->
 * ```
 * @param {String} str
 * @param {String} maxLength
 * @param {String} padString
 * @return {String}
 * @api public
 */

exports.pad_start = (str, maxLength, padStr) => {
  return str.padStart(maxLength, padStr);
};

/**
 * Prepends a prefix to the given string.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 */

exports.prepend = (str = '', prefix = '') => {
  return (isString(str) && isString(prefix)) ? (prefix + str) : (str || prefix);
};

/**
 * Removes all occurrences of the given substring
 *
 * @param {String} str
 * @param {String} substring
 * @return {String}
 */

exports.remove = (str, substring) => {
  return isString(str) ? str.split(substring).join('') : '';
};

/**
 * Removes the first occurrence of substring from the given string.
 *
 * @param {String} str
 * @param {String} substring
 * @return {String}
 */

exports.remove_first = (str, substr, repl = '') => {
  if (isString(str) && isString(substr) && isString(repl)) {
    return str.replace(substr, repl);
  }
  return toString(str) || toString(repl);
};

/**
 * Replace all occurrences of substring with the given replacement.
 *
 * @param {String} input
 * @param {String} substring
 * @param {String} replacement
 * @return {String}
 */

exports.replace = (str, substr, repl = '') => {
  if (isString(str) && isString(substr) && isString(repl)) {
    return str.split(substr).join(repl);
  }
  return toString(str) || toString(repl);
};

/**
 * Replace the first occurrence of substring with replacement
 *
 * @param {String} input
 * @param {String} substring
 * @param {String} replacement
 * @return {String}
 */

exports.replace_first = exports.remove_first;

/**
 * Reverse the characters in the given string, or reverse the elements
 * in the given array.
 *
 * @param {string|array} arr
 * @return {string|array}
 */

exports.reverse = val => {
  if (Array.isArray(val)) {
    return val.slice().reverse();
  }
  if (typeof val === 'string') {
    return val.split().reverse().join('');
  }
  return '';
};

/**
 * Removes whitespace from the end of the given string.
 *
 * @param {String} str
 * @return {String}
 */

exports.rstrip = exports.trim_end;

/**
 * Return the length of the given string or array, or the size of
 * the given `Map` or `Set, or the number of keys in the given object.
 *
 * @param {Array|String} value
 * @return {Number}
 */

exports.size = value => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size;
  }
  if (utils.isObject(value)) {
    return Object.keys(value).length;
  }
  return 0;
};

/**
 * Extract a section from the given string, beginning at the specified
 * `startindex`, and ending after the given `length` + `startIndex`.
 *
 * @param {String} str
 * @param {Number} startIndex
 * @param {Number} length
 * @return {String}
 */

exports.slice = (str, startIndex, length) => {
  return isString(str) ? str.slice(startIndex, startIndex + length) : '';
};

/**
 * Split the given string with the given separator.
 *
 * @param {String} str
 * @param {String} separator If no separator is defined, the string will be split on every character.
 * @return {String}
 */

exports.split = (str, sep = '') => {
  return isString(str) && isString(sep) ? str.split(sep) : str;
};

/**
 * Alias for [string.trim()](#trim), removes whitespace from both
 * ends of the given string. Whitespace in this context is all the
 * whitespace characters (space, tab, no-break space, etc.) and all
 * the line terminator characters (LF, CR, etc.).
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

exports.strip = exports.trim;

/**
 * Removes all HTML tags from the given string.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

exports.strip_html = str => {
  return isString(str) ? str.replace(/<[^>]>/g, '') : '';
};

/**
 * Removes all newline characters from the given string.
 *
 * @param {String} str
 * @return {String}
 */

exports.strip_newlines = str => {
  return isString(str) ? str.replace(/\n/g, '') : '';
};

/**
 * Removes all newline characters
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
 * Alias for [string.slice()](#slice). Extracts a section from the
 * given string, beginning at the specified `startindex`, and ending
 * after the given `length` + `startIndex`.
 *
 * @param {String} input
 * @param {Number} startIndex
 * @param {Number} length
 * @return {String}
 */

exports.substr = exports.slice;

/**
 * Removes whitespace from both ends of the given string. Whitespace
 * in this context is all the whitespace characters (space, tab, no-break
 * space, etc.) and all the line terminator characters (LF, CR, etc.).
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

exports.trim = str => {
  return (typeof str === 'string' && str !== '') ? str.trim() : '';
};

/**
 * Removes whitespace from the end of the given string. Whitespace
 * in this context is all the whitespace characters (space, tab, no-break
 * space, etc.) and all the line terminator characters (LF, CR, etc.).
 * Alias for [string.rstrip()](#rstrip).
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

exports.trim_end = str => {
  if (typeof str === 'string') {
    return trimEnd ? trimEnd.call(str) : str.replace(/\s+$/, '');
  }
  return '';
};

/**
 * Removes whitespace from the beginning of the given string. Whitespace
 * in this context is all the whitespace characters (space, tab, no-break
 * space, etc.) and all the line terminator characters (LF, CR, etc.).
 * Alias for [string.lstrip()](#lstrip).
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

exports.trim_start = str => {
  if (typeof str === 'string') {
    return trimStart ? trimStart.call(str) : str.replace(/^\s+/, '');
  }
  return '';
};

/**
 * Truncate the given `str` to the specified length.
 *
 * @param {String} str
 * @param {Number} length
 * @param {String} suffix
 * @return {String}
 */

exports.truncate = (str, len = str.length, suffix = '…') => {
  if (typeof str !== 'string') return '';
  let num = Math.min(isNumber(len) ? len : str.length, str.length);
  return str.slice(0, num) + (isString(suffix) ? suffix : '');
};

/**
 * Return only the first N words
 *
 * @param {String} input
 * @param {Number} n
 * @return {String}
 */

exports.truncate_words = (input, n) => {
  n = parseInt(n, 10);
  if (!isFinite(n) || n < 0) n = 15;
  return toString(input).trim().split(/ +/).slice(0, n).join(' ');
};

exports.truncate_words = (str, count, suffix) => {
  let res = str.split(/[ \t]/).slice(0, +count);
  let val = res.join(' ');
  if (isString(suffix)) {
    return val + suffix;
  }
  return val + '…';
};

exports.truncate_words = (val, words, str = '...') => {
  if (!val) return '';
  let list = toString(val).split(' ');
  let int = parseInt(words || 15, 10);
  let l = Math.max(int, 0);
  return list.length > l ? list.slice(0, l).join(' ') + str : val;
};

exports.truncatewords = exports.truncate_words;
exports.truncateWords = exports.truncate_words;

/**
 * Returns an uppercase string. Alias for [string.uppercase()](#uppercase).
 *
 * @param {String} str
 * @return {String}
 */

exports.upcase = exports.uppercase;

/**
 * Returns an uppercase string. Alias for [string.upcase()](#upcase).
 *
 * @param {String} str
 * @return {String}
 */

exports.uppercase = str => isString(str) ? str.toUpperCase() : '';

/**
 * Wrap the given string to the specified length.
 */

exports.wordWrap = (str, options = {}) => {
  if (!str) return str;

  if (typeof options === 'number') {
    options = { width: options };
  }

  let { indent = '', newline = ('\n' + indent), width = 80 } = options;
  let spaces = (newline + indent).match(/[^\S\n]/g) || [];
  width -= spaces.length;
  let source = `.{1,${width}}([\\s\\u200B]+|$)|[^\\s\\u200B]+?([\\s\\u200B]+|$)`;
  let output = str.trim();
  let regex = new RegExp(source, 'g');
  let lines = output.match(regex) || [];
  lines = lines.map(line => line.replace(/\n$/, ''));
  if (options.padEnd) lines = lines.map(line => line.padEnd(width, ' '));
  if (options.padStart) lines = lines.map(line => line.padStart(width, ' '));
  return indent + lines.join(newline);
};
