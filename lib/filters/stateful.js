'use strict';

const object = require('./object');
const utils = require('../utils');

module.exports = (state = {}) => {
  const filters = {};

  filters.comment = (...args) => {
    let val = args.pop();
    let str = val.fn ? val.fn() : utils.toString(val);
    let m = /^\s+/.exec(str);
    let prefix = m ? m[0] : '';
    let comment = str.replace(/\s+/g, ' ');
    return `${prefix}<!-- ${comment.trim()} -->`;
  };

  filters.cycle = function(...args) {
    let opts = args.pop();
    let name = opts.hash && opts.hash.name ? opts.hash.name : 'default';

    if (!state.hasOwnProperty('cycle')) {
      state.cycle = {};
    }

    if (!state.cycle.hasOwnProperty(name)) {
      state.cycle[name] = 0;
    }

    let idx = state.cycle[name];
    let val = args[idx++ % args.length];
    state.cycle[name] = idx;
    return utils.toString(val);
  };

  /**
   * ```handlebars
   * {{decrement "foo"}}
   * ```
   * @param {String} `counter`
   * @return {Number}
   * @api public
   */

  filters.decrement = function(name) {
    if (!utils.isString(name)) {
      return '';
    }
    if (!state.hasOwnProperty('counter')) {
      state.counter = {};
    }
    if (!state.counter.hasOwnProperty(name)) {
      state.counter[name] = 0;
    }
    return String(--state.counter[name]);
  };

  // TODO
  filters.empty = () => '';

  /**
   * If input is empty, default returns value, otherwise, the input.
   * Can be used with strings, arrays, and hashes.
   *
   * @param  {string|array|object} input
   * @param  {string|array|object} value
   * @return {string|array|object}
   */

  filters.default = (a, b) => a || b || '';
  filters.default = (input, value) => {
    return input && input.length > 0 ? toString(input) : toString(value);
  };
  filters.default = (val, default_value) => {
    return object.isEmpty(val) ? default_value : val;
  };

  /**
   * ```handlebars
   * {{increment "foo"}}
   * ```
   * @param {String} `counter`
   * @return {Number}
   * @api public
   */

  filters.increment = function(name) {
    if (!utils.isString(name)) {
      return '';
    }
    if (!state.hasOwnProperty('counter')) {
      state.counter = {};
    }
    if (!state.counter.hasOwnProperty(name)) {
      state.counter[name] = 0;
    }
    return state.counter[name]++;
  };

  filters.limit = (list, limit, options) => {
    if (!list || !Array.isArray(list)) {
      return [];
    }

    list._i = list._i || 0;
    list._i++;

    let len = list.length - 1;
    let n = list._i % len;
    let items = list.slice(n, n + limit);

    if (items.length < limit) {
      items.push.apply(items, list.slice(0, limit - items.length));
    }
    return items;
  };

  filters.log = (...args) => {
    let last = args[args.length - 1];
    if (utils.isObject(last) && last.hash) args.pop();
    console.log.apply(console, args);
  };

  /**
   * Get page count of the items when paginated
   *
   * @param {Number} count
   * @param {Number} size
   * @param {Number} page
   * @listurn {Array}
   */

  filters.pagination = (count, limit, page = 1) => {
    count = Math.floor(count);
    limit = Math.floor(limit);
    page = Math.floor(page);

    let maxPages = count / limit;
    if (count % limit === 0) {
      maxPages++;
    }

    let list = [page - 2, page - 1, page, page + 1, page + 2];
    let i = 0;

    while (i < list.length) {
      if (list[i] < 1 || list[i] > maxPages) {
        list.splice(i, 1);
      } else {
        i++;
      }
    }

    if (list[0] !== 1) {
      list.unshift('...');
      list.unshift(1);
    }

    if (list[list.length - 1] < maxPages) {
      list.push('...');
      list.push(maxPages);
    }

    let nextNum = page + 1;
    let prevNum = page - 1;

    return {
      current: page,
      next: maxPages <= nextNum ? maxPages : nextNum,
      prev: prevNum < 1 ? 1 : prevNum,
      list
    };
  };


  /**
   * Get page count of the items when paginated
   *
   * @param {Number} count
   * @param {Number} limit
   * @param {Number} page
   * @listurn {Array}
   */

  filters.pagination = function(count, limit, page = 1) {
    count = Math.floor(count);
    limit = Math.floor(limit);
    page = Math.floor(page);

    let maxPages = count / limit;
    if (count % limit === 0) {
      maxPages++;
    }

    let list = [page - 2, page - 1, page, page + 1, page + 2];
    let i = 0;

    while (i < list.length) {
      if (list[i] < 1 || list[i] > maxPages) {
        list.splice(i, 1);
      } else {
        i++;
      }
    }

    if (list[0] !== 1) {
      list.unshift('...');
      list.unshift(1);
    }

    if (list[list.length - 1] < maxPages) {
      list.push('...');
      list.push(maxPages);
    }

    let nextNum = page + 1;
    let prevNum = page - 1;

    return {
      current: page,
      next: maxPages <= nextNum ? maxPages : nextNum,
      prev: prevNum < 1 ? 1 : prevNum,
      list
    };
  };

  return filters;
};
