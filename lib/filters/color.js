'use strict';

const colors = require('colorutilities');
const { isString } = require('../utils');

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
 * @param {string} val - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to darken the color in percent.
 * @returns {string} The new color.
 * @api public
 */
exports.color_darken = (val, percentage) => colors.lighten(val, -percentage);

/**
 * Desaturates the input color. Takes a value between 0 and 100 percent.
 * Will automatically determine the type of color and how to handle it.
 *
 * @param {string} val - The color to desaturate. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to desaturate the color in percent.
 * @returns {string} The new color.
 */
exports.color_desaturate = (val, percentage) => colors.saturate(val, -percentage);

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
exports.color_lighten = (val, percentage) => colors.lighten(val, percentage);

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
exports.saturate = (val, percent) => colors.saturate(val, percent);

/**
 * Takes a color and converts it to a hex color.
 *
 * @param {string} color - The color to normalize.
 * @returns {string} The new color.
 */
exports.color_to_hex = (color) => {
  if (!isString(color)) return color;

  try {
    colors.toHex(color);
  } catch (err) {
    return '';
  }
};

function rgb2hex(val) {
  if (!isString(val)) return val;

  const rgb = val.slice(4, -1).split(',');

  function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  }

  const red = rgbToHex(rgb[0]);
  const blue = rgbToHex(rgb[1]);
  const green = rgbToHex(rgb[2]);

  return '#' + red + blue + green;
}

/**
 * Changes the lightness of the given color. Will automatically determine the type of color and how to handle it.
 * Pass a negative percentage value to darken the color instead.
 * @param {string} color - The color to lighten. Can be a hex, RGB, RGBa, HSL, HSLa, HSV, HSB or color name.
 * @param {number} [percentage=10] - How much to lighten the color in percent.
 * @returns {string} The new color.
 */
exports.color_to_hsl = (color) => {
  if (!isString(color)) return color;

  try {
    return colors.toHex(color);
  } catch (err) {
    return '';
  }
};

// or
function hex2hsl(val) {
  let [R, G, B] = exports.color_to_rgb(val).slice(4, -1).split(',');

  R = R / 255;
  G = G / 255;
  B = G / 255;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);
  const delta = max - min;
  const hsl = [];

  if (max === min) {
    hsl[0] = 0;
  } else if (R === max) {
    hsl[0] = (G - B) / delta;
  } else if (G === max) {
    hsl[0] = 2 + (B - R) / delta;
  } else if (B === max) {
    hsl[0] = 4 + (R - G) / delta;
  }

  hsl[0] = Math.min(hsl[0] * 60, 360);

  if (hsl[0] < 0) {
    hsl[0] += 360;
  }

  // the "l" from hsl
  hsl[2] = (min + max) / 2;

  if (max === min) {
    hsl[1] = 0;
  } else if (hsl[2] <= 0.5) {
    hsl[1] = delta / (max + min);
  } else {
    hsl[1] = delta / (2 - max - min);
  }

  hsl[1] = hsl[1] * 100;
  hsl[2] = hsl[2] * 100;

  return hsl;
}

/**
 * Takes a color value (hex, rgb(a), hsl(a), hsv, hsb) or name
 * and converts it to an RGB color.
 *
 * @param   {string} color - The color to normalize.
 * @returns {string} The normalized RGB color.
 */
exports.color_to_rgb = (color) => {
  if (!isString(color)) return color;

  try {
    return colors.toRgb(color);
  } catch (err) {
    return '';
  }
};

function hex2rgb(val) {
  if (!isString(val)) return val;

  const rgb = [];
  let hex = val.slice(1);

  // short form
  if (val.length === 4) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  for (let i = 0; i < 6; i += 2) {
    rgb.push(parseInt(hex.substr(i, 2), 16));
  }

  return `rgb(${rgb.join(',')})`;
}
