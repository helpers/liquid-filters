'use strict';

const isObject = require('isobject');

module.exports = (options = {}) => {
  const opts = Object.assign({ context: {} }, options);
  const context = opts.context;
  const filters = {};

  // TODO
  filters.empty = () => '';

  filters.log = (...args) => {
    let last = args[args.length - 1];
    if (isObject(last) && last.hash) args.pop();
    console.log.apply(console, args);
  };

  filters.comment = options => {
    let str = options.fn();
    let m = /^\s+/.exec(str);
    let prefix = m && m[0].length ? m[0] : '';
    let val = str.trim().replace(/\s+/g, ' ');
    return `${prefix}<!-- ${val} -->`;
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

  return filters;
};
