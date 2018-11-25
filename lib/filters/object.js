'use strict';

const isObject = require('isobject');
const get = require('get-value');

exports.assign = (prop, val, options = {}) => {
  options.data.root[prop] = val;
  if (this && this.app) {
    this.app.data(prop, val);
  }
  return '';
};

exports.capture = (prop, options = {}) => {
  let val = options.fn(this);
  options.data.root[prop] = val;
  if (this && this.app) {
    this.app.data(prop, val);
  }
  return '';
};

/**
 * Return an array of the object's keys
 *
 * @param {Object} input
 * @return {Array}
 */

exports.keys = val => {
  return isObject(val) ? Object.keys(val) : [];
};

/**
 * Return a JSON string of the object
 *
 * @param {Object} `val`
 * @return {String}
 */

exports.json = val => {
  try {
    return JSON.stringify(val);
  } catch (err) { /* do nothing */ }
  return '{}';
};

/**
 * Get an item of the Object by property name
 *
 * @param {Object} obj
 * @param {String} prop
 * @return {Object}
 */

exports.get = (obj, prop) => {
  return isObject(obj) || Array.isArray(obj) ? get(obj, prop) : '';
};

exports.get = (ctx, key, options = {}) => {
  let hash = options.hash || {};
  let val = get(ctx, key);
  if (val && hash.prop) {
    return get(val, hash.prop);
  }
  return val;
};

exports.get = (prop, options = {}) => {
  let ctx = Object.assign({}, options.data.root, this, options.hash);
  return get(ctx, prop);
};
