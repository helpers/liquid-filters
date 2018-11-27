'use strict';

const isNumber = require('is-number');
const typeOf = require('kind-of');

/**
 * Cast the given value to a number.
 * @param {*} num
 * @return {Number}
 */

exports.toNumber = num => isNumber(num) ? Number(num) : 0;

/**
 * Cast the given value to a string.
 * @param {*} str
 * @return {String}
 */

exports.toString = str => {
  return !exports.isString(str) ? '' : String(str);
};

/**
 * Returns true if the given value is a string
 * @param {*} str
 * @return {Boolean}
 */

exports.isObject = val => typeOf(val) === 'object';

/**
 * Returns true if the given value is a string
 * @param {*} str
 * @return {Boolean}
 */

exports.isString = str => str !== '' && typeof str === 'string';

/**
 * Returns true if the given value is an instance of Date.
 * @param {*} val
 * @return {Boolean}
 */

exports.isDate = val => val instanceof Date;
