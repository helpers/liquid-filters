'use strict';

const utils = require('../utils');

module.exports = function(options) {
  let opts = Object.assign({ context: {} }, options);
  let context = opts.context;
  let filters = {};

  filters.cycle = function() {
    let args = [].slice.call(arguments);
    let opts = args.pop();
    let name = opts.hash.name || 'default';

    if (!context.hasOwnProperty('cycle')) {
      context.cycle = {};
    }

    if (!context.cycle.hasOwnProperty(name)) {
      context.cycle[name] = 0;
    }

    let idx = context.cycle[name];
    let val = args[idx++ % args.length];
    context.cycle[name] = idx;
    return utils.toString(val);
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
    if (!context.hasOwnProperty('counter')) {
      context.counter = {};
    }
    if (!context.counter.hasOwnProperty(name)) {
      context.counter[name] = 0;
    }
    return context.counter[name]++;
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
    if (!context.hasOwnProperty('counter')) {
      context.counter = {};
    }
    if (!context.counter.hasOwnProperty(name)) {
      context.counter[name] = 0;
    }
    return String(--context.counter[name]);
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
