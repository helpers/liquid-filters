'use strict';

const isNumber = require('is-number');

exports.abs = num => isNumber(num) ? Math.abs(num) : '';
exports.ceil = num => isNumber(num) ? Math.ceil(num) : '';
exports.floor = num => isNumber(num) ? Math.floor(num) : '';;

/**
 * Divide `a` by operand `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.divided_by = function(input, operand) {
  return Number(input) / Number(operand);
};
exports.divided_by = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) / Number(b) : '';
};

exports.remainder = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) % Number(b) : '';
};

/**
 * Subtract
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.minus = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) - Number(b) : '';
};
exports.subtract = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) - Number(b) : '';
};

/**
 * Add number `a` to number `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.plus = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) + Number(b) : '';
};
exports.add = function(a, b) {
  return isNumber(a) && isNumber(b) ? Number(a) + Number(b) : '';
};

/**
 * Multiply
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 */

exports.times = function(num, operand) {
  return Number(num) * Number(operand);
};
exports.multiple = function(num, operand) {
  return Number(num) * Number(operand);
};

/**
 * Round the given number.
 *
 * @param {Number} num
 * @param {Number} precision Specify the number of places after the decimal to use.
 * @return {Number}
 */

exports.round = function(num, precision) {
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

exports.random = function(m, n) {
  m = parseInt(m, 10);
  n = parseInt(n, 10);
  if (!isFinite(m)) return Math.random();
  if (!isFinite(n)) {
    n = m;
    m = 0;
  }
  return Math.random() * (n - m) + m;
};
