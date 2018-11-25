'use strict';

const inflection = require('inflection');

/**
 * If input > 1 return singular, otherwise plural
 *
 * @param {string} word
 * @param {number} count
 * @param {string} singular
 * @param {string} plural
 * @return {String}
 */

exports.inflect = (word, ...rest) => {
  let last = rest[rest.length - 1];
  if (last && typeof last === 'object' && rest.hash) {
    rest.pop();
  }
  return inflection.inflect(word, ...rest);
};

exports.pluralize = (word) => {
  return inflection.pluralize(word);
};

exports.singularize = (word) => {
  return inflection.singularize(word);
};
