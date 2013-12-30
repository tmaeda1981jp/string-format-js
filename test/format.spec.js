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

    it("'[%5d]'.format(123) === '[  123]'", function() {
      expect('[%5d]'.format(123)).to.equal('[  123]');
    });

    it("'[%-5d]'.format(123) === '[123  ]'", function() {
      expect('[%-5d]'.format(123)).to.equal('[123  ]');
    });
  });

  describe("%s", function(){
    it("'This is %s'.format('a pen') === 'This is a pen'", function() {
      expect('This is %s'.format('a pen')).to.equal('This is a pen');
    });
    it("'This is %s %s'.format('a', 'pen') === 'This is a pen'", function() {
      expect('This is %s %s'.format('a', 'pen')).to.equal('This is a pen');
    });
    it("'This %s %s %s'.format('is', 'a', 'pen') === 'This is a pen'", function() {
      expect('This %s %s %s'.format('is', 'a', 'pen')).to.equal('This is a pen');
    });
    it("'[%5s]'.format('abc') === '[  abc]'", function() {
      expect('[%5s]'.format('abc')).to.equal('[  abc]');
    });
    it("'[%-5s]'.format('abc') === '[abc  ]'", function() {
      expect('[%-5s]'.format('abc')).to.equal('[abc  ]');
    });

    it("'[%.4s]'.format('abcde') === '[abcd]'", function() {
      expect('[%.4s]'.format('abcde')).to.equal('[abcd]');
    });
    it("'[%5.4s]'.format('abcde') === '[ abcd]'", function() {
      expect('[%5.4s]'.format('abcde')).to.equal('[ abcd]');
    });
    it("'[%-5.4s]'.format('abcde') === '[abcd ]'", function() {
      expect('[%-5.4s]'.format('abcde')).to.equal('[abcd ]');
    });
    it("'[%-5.4s]'.format('あいうえお') === '[あいうえ ]'", function() {
      expect('[%-5.4s]'.format('あいうえお')).to.equal('[あいうえ ]');
    });
  });

  describe("%o", function() {
    it("'123 => %o'.format(123) === '123 => 173'", function() {
      expect('123 => %o'.format(123)).to.equal('123 => 173');
    });
  });

  describe("%b", function() {
    it("'123 => %b'.format(123) === '123 => 1111011'", function() {
      expect('123 => %b'.format(123)).to.equal('123 => 1111011');
    });
  });

  describe("%x", function() {
    it("'123 => %x'.format(123) === '123 => 7b", function() {
      expect('123 => %x'.format(123)).to.equal('123 => 7b');
    });
  });

  describe("%c", function(){});
  describe("%e", function(){});
  describe("%f", function(){});

  describe("%t", function(){});

});
