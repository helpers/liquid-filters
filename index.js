'use strict';

let groups = require('./lib/filters');

module.exports = function(type, options = {}) {
  if (type) {
    let group = groups[type];
    if (typeof group === 'function') {
      return group(options);
    }
    return group;
  }

  let filters = {};
  let keys = Object.keys(groups);
  let names = [];
  let arr = keys.slice();

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let group = groups[key];

    if (typeof group === 'function') {
      group = group(options);
    }

    for (let name of Object.keys(group)) {
      // temporary code, for catching duplicates from different filter groups
      if (names.includes(name)) {
        console.log('duplicate:', name);
      }
      filters[name] = group[name];
      names.push(name);
    }
  }

  return filters;
};
