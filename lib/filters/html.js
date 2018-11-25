'use strict';

const ent = require('ent');

/**
 * Escape tag characters in the given HTML string.
 *
 * @param {String} str
 * @return {String}
 */

const esc = exports.escapeHtml = str => {
  return toString(str)
    .replace(/&(?!\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
};

/**
 * Remove all HTML tags from the given string.
 *
 * @param {String} str
 * @return {String}
 */

exports.strip_html = str => toString(str).replace(/<[^>]+>/gm, '');

/**
 * Generate <img> tag
 *
 * @param {String} url
 * @param {String} alt
 * @return {String}
 */

exports.img_tag = (url, alt) => {
  return '<img src="' + esc(url) + '" alt="' + esc(alt || '') + '">';
};

/**
 * Generate <script> tag
 *
 * @param {String} url
 * @return {String}
 */

exports.script_tag = url => {
  return '<script src="' + esc(url) + '"></sc' + 'ript>';
};

/**
 * Generate <link> tag
 *
 * @param {String} url
 * @param {String} media
 * @return {String}
 */

exports.stylesheet_tag = (url, media = 'all') => {
  return `<link href="${esc(url)}" rel="stylesheet" type="text/css" media="${esc(media)}">`;
};

/**
 * Create an `<a>` tag.
 *
 * @param {String} link
 * @param {String} url
 * @param {String} title
 * @return {String}
 */

exports.link_to = (link, url = '', title = '') => {
  return `<a href="${esc(url)}" title="${esc(title)}">${esc(link)}</a>`;
};

/**
 * Unescape HTML in the given string.
 *
 * @param {String} str
 * @return {String}
 */

exports.unescape = str => {
  return toString(str)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&');
};

/**
 * XML escape a string for use. Replaces any special
 * characters with appropriate HTML entity replacements.
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */

exports.xml_escape = str => {
  return typeof str === 'string' ? ent.encode(str) : '';
};
