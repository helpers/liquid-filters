'use strict';

const moment = require('moment');

exports.date_to_string = (date, type = nil, style = nil) => {};
exports.date_to_long_string = (date, type = nil, style = nil) => {};
exports.date_to_xmlschema = (date) => {};
exports.date_to_rfc822 = (date) => {};
exports.stringify_date = (date, month_type, type = nil, style = nil) => {};
exports.ordinal = (number) => {};
exports.time = (input) => {};

exports.date = function(date, format) {
  if (date === 'now') date = Date.now();
  if (typeof date === 'string') date = new Date(date);
  return moment(date).strftime(format);
};

exports.date_to_xmlschema = function(date) {
  return moment(date).toISOString();
};

exports.date_to_string = function(date) {
  return moment(date).format('DD MMM YYYY');
};

/**
 * Take the current time in milliseconds and add 0
 * @param {Number} input
 * @return {Number}
 */

exports.timestamp = function(input) {
  input = parseInt(input, 10) || 0;
  return new Date().getTime() + input;
};

/**
 * Format date/time
 * see syntax reference: http://liquid.rubyforge.org/classes/Liquid/StandardFilters.html#M000012
 *
 * @param {String} input
 * @param {String} format
 * @return {String}
 */

// exports.date = function(input, format) {
//   var time, timestamp;

//   if (toString(input).toLowerCase() == 'now') {
//     time = new Date();
//   } else {
//     timestamp = parseInt(input, 10);
//     if (timestamp == input) {
//       time = new Date(timestamp);
//     } else {
//       time = new Date(input);
//     }
//   }
//   if (!time || !isFinite(time.valueOf())) return 'Invalid Date';
//   if (!format) format = '%Y-%m-%j %H:%M:%S';
//   // example: ["Wed", "Apr", "11", "2012"]
//   var dates = time.toDateString().split(/\s/);
//   // example: ["Wednesday,", "April", "11,", "2012"]
//   var dateS = time.toLocaleDateString().split(/\s/);
//   // example: ["10", "37", "44", "GMT", "0800", "(中国标准时间)"]
//   var times = time.toTimeString().split(/[\s:\+]/);
//   var n2 = function(n) {
//     return n < 10 ? '0' + n : n;
//   };
//   var replace = {
//     a: dates[0], // week day
//     A: dateS[0],
//     b: dates[1], // month
//     B: dateS[1],
//     c: time.toLocaleString(),
//     d: dates[2],
//     H: times[0], // 24 hour
//     I: times[0] % 12, // 12 hour
//     j: dates[2], // date
//     m: n2(time.getMonth() + 1), // month
//     M: times[1], // minute
//     p: Number(times[0]) < 12 ? 'AM' : 'PM',
//     S: times[2], // second
//     U: weekNo(time), // start on Sunday
//     W: weekNo(time, true), // start on Monday
//     w: time.getDay(), // week day (0-6)
//     x: time.toDateString(),
//     X: time.toTimeString(),
//     y: dates[3].substr(-2), // year
//     Y: dates[3],
//     Z: times[4] // time zone
//   };
//   var ret = toString(format);
//   for (var i in replace) {
//     ret = ret.replace(new RegExp('%' + i, 'g'), replace[i]);
//   }
//   return ret;
// };

// function weekNo(now, mondayFirst) {
//   var totalDays = 0;
//   var years = now.getFullYear();
//   var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   if (years % 100 === 0) {
//     if (years % 400 === 0) days[1] = 29;
//   } else if (years % 4 === 0) {
//     days[1] = 29;
//   }
//   if (now.getMonth() === 0) {
//     totalDays = totalDays + now.getDate();
//   } else {
//     var curMonth = now.getMonth();
//     for (var count = 1; count <= curMonth; count++) {
//       totalDays = totalDays + days[count - 1];
//     }
//     totalDays = totalDays + now.getDate();
//   }
//   // default to start on Sunday
//   var week = Math.round(totalDays / 7);
//   if (mondayFirst && new Date(toString(years)).getDay() === 0) week += 1;
//   return week;
// }
