'use strict';

const isNumber = require('is-number');
const utils = exports = require('handlebars-utils');

/**
 * Cast the given value to a number.
 * @param {*} num
 * @return {number}
 */

utils.toNumber = num => isNumber(num) ? Number(num) : 0;

/**
 * Cast the given value to a string.
 * @param {*} str
 * @return {string}
 */

utils.toString = str => str == null ? '' : String(str);

/**
 * Returns true if the given value is a string
 * @param {*} str
 * @return {boolean}
 */

utils.isString = str => str && typeof str === 'string';
