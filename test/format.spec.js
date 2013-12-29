/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, context:false, */

require('../format.js');
var expect = require('expect.js');

describe("format.js", function() {
  'use strict';

  describe("%", function() {
    it("'100%'.format(10) === '100%'", function() {
      expect("100%".format(10)).to.equal('100%');
    });
  });

  describe("%d", function() {
    it("'This is %d'.format(5) === 'This is 5'", function() {
      expect("This is %d".format(5)).to.equal('This is 5');
    });

    it("'This is %d'.format(10) === 'This is 10'", function() {
      expect("This is %d".format(10)).to.equal('This is 10');
    });

    it("'This is %d and %d'.format(5, 10) === 'This is 5 and 10'", function() {
      expect("This is %d and %d".format(5, 10)).to.equal('This is 5 and 10');
    });

    it("'This is %d, %d and %d'.format(5, 10, 15) === 'This is 5, 10 and 15'", function() {
      expect("This is %d, %d and %d".format(5, 10, 15)).to.equal('This is 5, 10 and 15');
    });

    it("'This is %05d'.format(123) === 'This is 00123'", function() {
      expect('This is %05d'.format(123)).to.equal('This is 00123');
    });

    it("'This is %03d and %05d'.format(1, 123) === 'This is 001 and 00123'", function() {
      expect('This is %03d and %05d'.format(1, 123)).to.equal('This is 001 and 00123');
    });
  });

  describe("%b", function(){});
  describe("%c", function(){});
  describe("%e", function(){});
  describe("%u", function(){}); // iru ?
  describe("%f", function(){});
  describe("%o", function(){});
  describe("%s", function(){});
  describe("%x", function(){});
  describe("%X", function(){});
  describe("%t", function(){});

});
