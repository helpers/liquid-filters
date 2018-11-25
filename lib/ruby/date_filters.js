'use strict';

/**
 * Format a date in short format e.g. "27 Jan 2011".
 * Ordinal format is also supported, in both the UK
 * (e.g. "27th Jan 2011") and US ("e.g. Jan 27th, 2011") formats.
 * UK format is the default.
 *
 * date - the Time to format.
 * type - if "ordinal" the returned String will be in ordinal format
 * style - if "US" the returned String will be in US format.
 *         Otherwise it will be in UK format.
 *
 * Returns the formatting String.
 */

exports.date_to_string = (date, type = null, style = null) => {
  return stringify_date(date, '%b', type, style);
};

/**
 * Format a date in long format e.g. "27 January 2011".
 * Ordinal format is also supported, in both the UK
 * (e.g. "27th January 2011") and US ("e.g. January 27th, 2011") formats.
 * UK format is the default.
 *
 * date - the Time to format.
 * type - if "ordinal" the returned String will be in ordinal format
 * style - if "US" the returned String will be in US format.
 *         Otherwise it will be in UK format.
 *
 * Returns the formatted String.
 */
exports.date_to_long_string = (date, type = null, style = null) => {
  return stringify_date(date, '%B', type, style);
};

/**
 * Format a date for use in XML.
 *
 * date - The Time to format.
 *
 * Examples
 *
 *   date_to_xmlschema(Time.now)
 *   # => "2011-04-24T20:34:46+08:00"
 *
 * Returns the formatted String.
 */

exports.date_to_xmlschema = date => {
  if (date.toString()) {
    return time(date).xmlschema;
  }
  return date;
};
/**
 * Format a date according to RFC-822
 *
 * date - The Time to format.
 *
 * Examples
 *
 *   date_to_rfc822(Time.now)
 *   # => "Sun, 24 Apr 2011 12:34:46 +0000"
 *
 * Returns the formatted String.
 */
exports.date_to_rfc822 = date => {
  if (date.toString()) {
    return time(date).rfc822;
  }
  return date;
};
/**
 * month_type: Notations that evaluate to 'Month' via `Time#strftime` ("%b", "%B")
 * type: null (default) or "ordinal"
 * style: null (default) or "US"
 *
 * Returns a stringified date or the empty input.
 */

exports.stringify_date = (date, month_type, type = null, style = null) => {
  if (!date.toString()) return date;
  let t = time(date);

  if (type === 'ordinal') {
    day = t.day;
    ordinal_day = '#{day}#{ordinal(day)}';

    if (style === 'US') {
      return t.strftime('#{month_type} #{ordinal_day}, %Y');
    }
    return t.strftime('#{ordinal_day} #{month_type} %Y');
  }
  return t.strftime('%d #{month_type} %Y');
};

exports.ordinal = number => {
  // return "th" if (11..13).cover?(number)
  // case number % 10
  // when 1 then "st"
  // when 2 then "nd"
  // when 3 then "rd"
  // else "th"
  // end
};

exports.time = input => {
  date = new Date(input);
  // unless date.respond_to?(:to_time)
  //   raise Errors::InvalidDateError,

  // end
  if (!date.respond_to(to_time)) {
    throw new SyntaxError('Invalid Date: "#{input.inspect}" is not a valid datetime.');
  }
  return date.to_time.dup.localtime;
};

function to_date(date) {
  // if (date.respond_to?(:strftime)) {
  //   return date;
  // }

  if (typeof date === 'string') {
    if (date.trim() === '') return '';
    date = date.toLowerCase();
  }

  if (date === 'now' || date === 'today') {
    return Date.now();
  }

  if (/^\d+$/.test(date)) {
    return new Date(date);
  }

  if (typeof date === 'string') {
    return Date.parse(date);
  }
}
