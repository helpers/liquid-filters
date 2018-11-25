'use strict';

require('mocha');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const moment = require('moment-strftime');
const helpers = require('..')();

describe('helpers', function() {
  describe('date', function() {
    it('should convert strftime format', function() {
      assert.equal(helpers.date(new Date(), '%a, %b %d, %y'), moment().strftime('%a, %b %d, %y'));
      assert.equal(helpers.date(new Date(), '%Y'), moment().strftime('%Y'));
      assert.equal(helpers.date('March 14, 2016', '%b %d, %y'), moment(new Date('March 14, 2016')).strftime('%b %d, %y'));
      assert.equal(helpers.date('now', '%Y-%m-%d %H:%M'), moment(Date.now()).strftime('%Y-%m-%d %H:%M'));
    });
  });
});
