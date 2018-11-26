'use strict';

const colors = require('colorutilities');
const { isString } = require('../utils');

/**
 * Try/catch and filter in one.
 */
function wrap(filter, fn) {
  return (...args) => {
    if (!filter(...args)) return '';

    try {
      return fn(...args);
    } catch (err) {
      return '';
    }
  };
}

/**
 * @todo(tunnckoCore)
 */
function brightness_difference(val, color) {}

/**
 * @todo(tunnckoCore)
 */
function color_brightness(val) {}

/**
 * @todo(tunnckoCore)
 */
function color_contrast(val, color) {}

/**
 * Changes the darkness of the given color.
 * Will automatically determine the type of color and how to handle it.
 *
 * @param {string} val - The color to darken. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to darken the color in percent.
 * @returns {string} The new color.
 * @api public
 */
exports.color_darken = wrap(isString, (color, percentage) => {
  return colors.lighten(color, -percentage);
});

/**
 * Desaturates the input color. Takes a value between 0 and 100 percent.
 * Will automatically determine the type of color and how to handle it.
 *
 * @param {string} val - The color to desaturate. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to desaturate the color in percent.
 * @returns {string} The new color.
 */
exports.color_desaturate = wrap(isString, (color, percentage) => {
  return colors.saturate(color, -percentage);
});

/**
 * @todo(tunnckoCore)
 */
function color_difference(val, color) {}

/**
 * @todo(tunnckoCore)
 */
function color_extract(val, type) {}

/**
 * Changes the lightness of the given color.
 * Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to darken the color instead.
 *
 * @param {string} color - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to lighten the color in percent.
 * @returns {string} The new color.
 */
exports.color_lighten = wrap(isString, colors.lighten);

/**
 * @todo(tunnckoCore)
 */
function color_mix(val, color, percentage) {}

/**
 * Modifies the given component of a color.
 * Will return a color type that includes the modified format — for example,
 * if you modify the alpha channel, the filter will return the color in rgba() format,
 * even if your input color was in hex format.
 *
 * - Red, green and blue values should be a number between 0 and 255
 * - Alpha should be a decimal number between 0 and 1
 * - Hue should be between 0 and 360 degrees
 * - Saturation and lightness should be a value between 0 and 100 percent.
 *
 * @todo(tunnckoCore)
 * @param {string} color - The color to modify.
 * @param {string} channel - The component modify: "red", "green", "blue", "alpha".
 * @param {string|number} value - The new value of the component.
 * @returns {string} Depending on your modification, it returns the modified color.
 */
exports.color_modify = function modifyChannels(val, channel, value) {
  if (channel === 'red') {
    return 1;
  }
  if (channel === 'blue') {
    return 2;
  }
  if (channel === 'green') {
    return 3;
  }
  if (channel === 'alpha') {
    return 4;
  }
};

/**
 * Changes the saturation of the given color.
 * Will automatically determine the type of color and how to handle it.
 *
 * @param {string} color - The color to saturate. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to saturate the color in percent.
 * @returns {string} The new color.
 */
exports.saturate = wrap(isString, colors.saturate);

/**
 * Takes a color and converts it to a hex color.
 *
 * @param {string} color - The color to normalize.
 * @returns {string} The new color.
 */
exports.color_to_hex = wrap(isString, colors.toHex);

/**
 * Takes a color and converts it to a HSL color.
 * If the color has alpha component, then the result will be in `rgba` format.
 *
 * @param {string} color - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to lighten the color in percent.
 * @returns {string} The new color.
 */
exports.color_to_hsl = wrap(isString, colors.toHsl);

/**
 * Takes a color value (hex, rgb(a), hsl(a), hsv, hsb) or name
 * and converts it to an RGB color.
 *
 * @param   {string} color - The color to normalize.
 * @returns {string} The normalized RGB color.
 */
exports.color_to_rgb = wrap(isString, colors.toRgb);
