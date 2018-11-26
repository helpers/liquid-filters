'use strict';

const { isString, saturate } = require('../utils');

function brightness_difference(val, color) {}
function color_brightness(val) {}
function color_contrast(val, color) {}
function color_darken(val, percentage) {}
function color_desaturate(val, percentage) {}
function color_difference(val, color) {}

function color_extract(val, type) {}

exports.color_lighten = lightenHex;
function lightenHex(val, percentage = 10) {
  const [H, S, L] = hexToHslTuple(val);

  return `hsl(${H}, ${S}%, ${saturate(L, percentage)})`;
}

function color_mix(val, color, percentage) {}

function color_modify(val, a, b) {}

// hex saturate
exports.saturate = saturateHex;
function saturateHex(val, percentage = 10) {
  const [H, S, L] = hexToHslTuple(val);

  return `hsl(${H}, ${saturate(S, percentage)}%, ${L})`;
}

// rgb to hex
exports.color_to_hex = rgbToHex;
function rgbToHex(val) {
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
* Takes a HEX value or name and converts it to an HSL color.

* @param   {string} hex - The color to normalize.
* @returns {string} The normalized HSL color.
*/
exports.color_to_hsl = (val) => {
  if (!isString(val)) return val;

  const [H, S, L] = hexToHslTuple(val);
  return `hsl(${H}, ${S}%, ${L}%)`;
};

function hexToHslTuple(val) {
  let [R, G, B] = hexToRgb(val).slice(4, -1).split(',');

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
  } else if (b === max) {
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
* Generates a RGB version of a HEX color.
*
* @param   {string} val - The HEX color to convert. For instance, #123456.
* @returns {string} A tuple of the red, green and blue values.
*/
exports.color_to_rgb = hexToRgb;
function hexToRgb(val) {
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
