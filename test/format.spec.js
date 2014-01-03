/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false, 
 sinon:false, context:false, */

require('../format.js');
var expect = require('expect.js');

describe("format.js", function() {
  'use strict';

  describe("String.format", function() {
    describe("%", function() {
      it("'100%'.format(10) === '100%'", function() {
        expect("100%".format(10)).to.equal('100%');
      });
      it("'not matched'.format() === 'not matched')", function() {
        expect('not matched'.format()).to.equal('not matched');
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

    describe("%X", function() {
      it("'123 => %X'.format(123) === '123 => 7B", function() {
        expect('123 => %X'.format(123)).to.equal('123 => 7B');
      });
    });

    describe("%u", function() {
      it("'%u'.format(0x12345678 ^ 0xFFFFFFFF) === '3989547399'", function() {
        expect('%u'.format(0x12345678 ^ 0xFFFFFFFF)).to.equal('3989547399');
      });
      it("'%u'.format(-1) === '4294967295'", function() {
        expect('%u'.format('-1')).to.equal('4294967295');
      });
    });

    describe("%c", function(){
      it("'%c'.format(97) === 'a'", function() {
        expect('%c'.format(97)).to.equal('a');
      });
    });

    describe("%f", function() {
      it("'%f'.format(1.0) === '1.000000'", function() {
        expect('%f'.format(1.0)).to.equal('1.000000');
      });
      it("'%.2f'.format(1.0) === '1.00'", function() {
        expect('%.2f'.format(1.0)).to.equal('1.00');
      });
      it("'[%10f]'.format(1.0) === '[1.00000000]'", function() {
        expect('[%10f]'.format(1.0)).to.equal('[1.00000000]');
      });
      it("'[%10.2f]'.format(1.0) === '[      1.00]'", function() {
        expect('[%10.2f]'.format(1.0)).to.equal('[      1.00]');
      });
      it("'[%10.2f]'.format(1.2345) === '[      1.23]'", function() {
        expect('[%10.2f]'.format(1.2345)).to.equal('[      1.23]');
      });
      it("'[%-10.2f]'.format(1.0) === '[1.00      ]'", function() {
        expect('[%-10.2f]'.format(1.0)).to.equal('[1.00      ]');
      });
    });
    describe("%e", function() {
      it("'%e'.format(123) === '1.23e+2'", function() {
        expect('%e'.format(123)).to.equal('1.23e+2');
      });
      it("'%e'.format(123.45) === '1.2345e+2'", function() {
        expect('%e'.format(123.45)).to.equal('1.2345e+2');
      });
      it("'%.5e'.format(123.45) === '1.23450e+2'", function() {
        expect('%.5e'.format(123.45)).to.equal('1.23450e+2');
      });
      it("'[%15e]'.format(123.45) === '[1.2345000000e+2]'", function() {
        expect('[%15e]'.format(123.45)).to.equal('[1.2345000000e+2]');
      });
      it("'[%15e]'.format(12345678901.45) === '[1.234567890e+10]'", function() {
        expect('[%15e]'.format(12345678901.45)).to.equal('[1.234567890e+10]');
      });
      it("'[%20e]'.format(12345678901.45) === '[1.23456789014500e+10]'", function() {
        expect('[%20e]'.format(12345678901.45)).to.equal('[1.23456789014500e+10]');
      });
      it("'[%15.2e]'.format(123.45) === '[        1.23e+2]'", function() {
        expect('[%15.2e]'.format(123.45)).to.equal('[        1.23e+2]');
      });
      it("'[%7.2e]'.format(123.45) === '[1.23e+2]'", function() {
        expect('[%7.2e]'.format(123.45)).to.equal('[1.23e+2]');
      });
      it("'[%-15.2e]'.format(123.45) === '[1.23e+2        ]'", function() {
        expect('[%-15.2e]'.format(123.45)).to.equal('[1.23e+2        ]');
      });
    });

    describe('hash', function() {
      it("'#{name}'.format({name:'Takashi Maeda'}) === 'Takashi Maeda'", function() {
        expect('#{name}'.format({
          name: 'Takashi Maeda'
        })).to.equal('Takashi Maeda');
      });
      it("'#{first} #{last}'.format({first:'Takashi', last:'Maeda'}) === 'Takashi Maeda'", function() {
        expect('#{first} #{last}'.format({
          first: 'Takashi',
          last:  'Maeda'
        })).to.equal('Takashi Maeda');
      });
      it("'#{a} #{b} #{c} #{d}}'.format(a:'This', b:'is', c:'a', d:'pen'}) === 'This is a pen'", function() {
        expect('#{a} #{b} #{c} #{d}'.format({
          a: 'This',
          b: 'is',
          c: 'a',
          d: 'pen'
        })).to.equal('This is a pen');
      });
    });
  });
});
