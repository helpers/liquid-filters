'use strict';

let filters = require('./lib/filters');
let tags = require('./lib/tags');

module.exports = (type, options = {}) => {
  if (type) {
    let group = filters[type];
    if (typeof group === 'function') {
      return group(options);
    }
    return group;
  }

  let keys = Object.keys(filters);
  let arr = keys.slice();
  let names = [];
  let res = {};

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let group = filters[key];

    if (typeof group === 'function') {
      group = group(options);
    }

    for (let name of Object.keys(group)) {
      // temporary code, for catching duplicates from different filter groups
      if (names.includes(name)) {
        console.log('duplicate:', name);
      }
      res[name] = group[name];
      names.push(name);
    }
  }

  return res;
};

module.exports.tags = tags;
