'use strict';

exports.or = (...args) => args.find(v => v != null);
exports.is = (a, b) => a === b;
exports.isnt = (a, b) => a !== b;
exports.every = function(...args) {
  for (let ele of args) {
    if (!ele) {
      return false;
    }
  }
  return true;
};

/**
 * Invoke the given `fn` when `num` is an even number.
 *
 * @name .ifEven
 * @param {Number} `num`
 * @param {Function} `fn`
 * @param {...rest} `any` Any additional arguments will be passed to `fn`.
 * @return {Boolean}
 * @api public
 */

exports.ifEven = (num, fn, ...rest) => {
  if (Number(num) % 2 === 0) {
    return fn(...rest);
  }
  return '';
};

/**
 * Invoke the given `fn` when `num` is an odd number.
 *
 * @name .ifOdd
 * @param {Number} `num`
 * @param {Function} `fn`
 * @param {...rest} `any` Any additional arguments will be passed to `fn`.
 * @return {Boolean}
 * @api public
 */

exports.ifOdd = (num, fn, ...rest) => {
  if (Number(num) % 2 !== 0) {
    return fn(...rest);
  }
  return '';
};
