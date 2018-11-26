'use strict';

const isNumber = require('is-number');
const { toNumber } = require('../utils');

exports.abs = num => isNumber(num) ? Math.abs(num) : '';
exports.ceil = num => isNumber(num) ? Math.ceil(num) : '';
exports.floor = num => isNumber(num) ? Math.floor(num) : '';

/**
 * Divide `a` by operand `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.divided_by = (val, number) => toNumber(val) / toNumber(number);
exports.divided_by = (input, operand) => {
  return Number(input) / Number(operand);
};
exports.divided_by = (a, b) => {
  return isNumber(a) && isNumber(b) ? Number(a) / Number(b) : '';
};

exports.remainder = (a, b) => {
  return isNumber(a) && isNumber(b) ? Number(a) % Number(b) : '';
};

/**
 * Subtract
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.minus = (a, b) => toNumber(a) - toNumber(b);
exports.minus = exports.subtract = (a, b) => {
  return isNumber(a) && isNumber(b) ? Number(a) - Number(b) : '';
};

exports.modulo = (val, number) => toNumber(val) % toNumber(number);

/**
 * Add number `a` to number `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.plus = (val, number) => toNumber(val) + toNumber(number);
exports.plus = (a, b) => {
  return isNumber(a) && isNumber(b) ? Number(a) + Number(b) : '';
};

// we might want to consider making this a non-number-specific
// filter, so that it also works with strings.
exports.add = exports.plus;

/**
 * Multiply
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.times = (val, number) => toNumber(val) * toNumber(number);
exports.times = (num, operand) => {
  return Number(num) * Number(operand);
};
exports.multiply = exports.times;

/**
 * Round the given number.
 *
 * @param {Number} num
 * @param {Number} precision Specify the number of places after the decimal to use.
 * @return {Number}
 */

exports.round = (num, precision) => {
  const prec = isNumber(precision) ? Number(precision) : 0;
  if (prec < 1) return Math.round(num);
  const n = Math.pow(10, prec);
  return Math.round(num * n) / n;
};

/**
 * Round the given number.
 *
 * @param {Number} num
 * @return {Number}
 */

exports.integer = num => parseInt(num, 10) || 0;

/**
 * Generate random number such that: m <= Number < n
 *
 * @param {Number} m
 * @param {Number} n
 * @return {Number}
 */

exports.random = (m, n) => {
  m = parseInt(m, 10);
  n = parseInt(n, 10);
  if (!isFinite(m)) return Math.random();
  if (!isFinite(n)) {
    n = m;
    m = 0;
  }
  return Math.random() * (n - m) + m;
};
