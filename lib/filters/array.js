'use strict';

const fill = require('fill-range');
const get = require('get-value');
const utils = require('../utils');


// join
// first
// last
// concat
// index
// map
// reverse
// size
// sort
// uniq

/**
 * Array
 */

exports.compact = function(arr) {
  if (typeof arr === 'string') {
    arr = arr.split(',');
  }
  if (Array.isArray(arr)) {
    return arr.filter(Boolean);
  }
  return '';
};

/**
 * Return the first element of an array
 *
 * @param {Array} array
 * @return {Object}
 */

exports.first = function(arr) {
  return Array.isArray(arr) ? arr[0] : '';
};
exports.first = function(arr) {
  if (typeof arr === 'string') {
    arr = arr.split(',');
  }
  if (Array.isArray(arr)) {
    return arr[0];
  }
  return '';
};

/**
 * Join the array's elements into a string
 *
 * @param {Array} input
 * @param {String} ch
 * @return {String}
 */

exports.join = function(val, ch) {
  if (Array.isArray(val)) {
    return val.join(ch || ' ');
  }
  return '';
};
exports.join = function(arr, sep) {
  if (typeof arr === 'string') {
    arr = arr.split(',');
  }
  if (Array.isArray(arr)) {
    return arr.join(sep || ',');
  }
  return '';
};

/**
 * Return the last element of an array
 *
 * @param {Array} array
 * @return {Object}
 */

exports.last = function(arr) {
  return Array.isArray(arr) ? arr[arr.length - 1] : '';
};
exports.last = function(arr) {
  if (typeof arr === 'string') {
    arr = arr.split(',');
  }
  if (Array.isArray(arr)) {
    return arr[arr.length - 1];
  }
  return '';
};

/**
 * Take the specified property of each element in the array, returning a new array
 *
 * @param {Array} arr
 * @param {String} prop
 * @return {Array}
 */

exports.map = function(arr, prop) {
  if (!Array.isArray(arr)) return [];
  return arr.map(obj => obj && obj[prop]);
};
exports.map = function(obj, prop) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let val = get(obj[key], prop);
      if (val) {
        arr.push(val);
      }
    }
  }
  return arr;
};

exports.range = function(a, b) {
  return fill.apply(null, arguments);
};

exports.reverse = function(arr) {
  arr.reverse();
  return arr;
};

exports.slice = function(val, a, b) {
  if (typeof val === 'string' || Array.isArray(val)) {
    return val.slice(a, b);
  }
  return '';
};

/**
 * Sort the array's elements by asc or desc order
 *
 * @param {Array} arr
 * @param {Number} order
 * @return {Array}
 */

exports.sort = function(arr) {
  return arr.sort();
};
exports.sort = function(arr, order) {
  if (!Array.isArray(arr)) return [];

  order = utils.toString(order).toLowerCase();
  arr.sort(function(a, b) {
    return a > b ? 1 : a < b ? -1 : a.localeCompare(b);
  });

  if (order === 'desc') {
    arr.reverse();
  }
  return arr;
};

/**
 * Sort an array of objects by the specified object property.
 *
 * @param {Array<object>} `arr`
 * @param {String} `prop`
 * @param {Number} `order`
 * @return {Array}
 */

exports.sortBy = function(arr, prop, order) {
  if (!Array.isArray(arr)) return [];

  order = utils.toString(order).toLowerCase();
  arr.sort(function(a, b) {
    if (a[prop] > b[prop]) return 1;
    if (a[prop] > b[prop]) return -1;
    return a[prop].localeCompare(b[prop]);
  });

  if (order === 'desc') {
    arr.reverse();
  }
  return arr;
};

exports.sort_by = exports.sortBy;

exports.sort_natural = function(arr) {
  return arr.sort(function(a, b) {
    return a.localeCompare(b);
  });
};

exports.uniq = function(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
};
