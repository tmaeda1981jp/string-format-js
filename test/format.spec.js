/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, describe:false,
 it:false, before:false, after:false, beforeEach:false, afterEach:false,
 sinon:false, context:false, */


if ('undefined' !== typeof module) {
  require('../format.js');
  var expect = require('expect.js');
}

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
      it("'%d'.format(10) === '10'", function() {
        expect("%d".format(10)).to.equal('10');
      });
      it("'%d'.format('10') === '10'", function() {
        expect("%d".format('10')).to.equal('10');
      });
      it("'%d, %d'.format(5, 10) === '5, 10'", function() {
        expect("%d, %d".format(5, 10)).to.equal('5, 10');
      });
      it("'%d, %d and %d'.format(5, 10, 15) === '5, 10 and 15'", function() {
        expect("%d, %d and %d".format(5, 10, 15)).to.equal('5, 10 and 15');
      });
      it("'%05d'.format(123) === '00123'", function() {
        expect('%05d'.format(123)).to.equal('00123');
      });
      it("'%05d'.format('123') === '00123'", function() {
        expect('%05d'.format('123')).to.equal('00123');
      });
      it("'%010d'.format('123') === '0000000123'", function() {
        expect('%010d'.format('123')).to.equal('0000000123');
      });
      it("'%03d, %05d'.format(1, 123) === '001, 00123'", function() {
        expect('%03d, %05d'.format(1, 123)).to.equal('001, 00123');
      });
      it("'[%5d]'.format(123) === '[  123]'", function() {
        expect('[%5d]'.format(123)).to.equal('[  123]');
      });
      it("'[%5d]'.format('123') === '[  123]'", function() {
        expect('[%5d]'.format('123')).to.equal('[  123]');
      });
      it("'[%10d]'.format(123) === '[       123]'", function() {
        expect('[%10d]'.format(123)).to.equal('[       123]');
      });
      it("'[%-5d]'.format(123) === '[123  ]'", function() {
        expect('[%-5d]'.format(123)).to.equal('[123  ]');
      });
      it("'[%-5d]'.format('123') === '[123  ]'", function() {
        expect('[%-5d]'.format('123')).to.equal('[123  ]');
      });
      it("'[%-10d]'.format(123) === '[123       ]'", function() {
        expect('[%-10d]'.format(123)).to.equal('[123       ]');
      });

      it("'%vd'.format(123) === '%vd'(not match)", function() {
        expect('%vd'.format(123)).to.equal('%vd');
      });
      it("'%-d'.format(123) === '%-d'(not match)", function() {
        expect('%-d'.format(123)).to.equal('%-d');
      });

      it("'%d'.format('test') throws TypeError", function() {
        expect( function() { "%d".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
      it("'%05d'.format('test') throws TypeError", function() {
        expect( function() { '%05d'.format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
      it("'[%5d]'.format('test') throws TypeError", function() {
        expect( function() { '[%5d]'.format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
      it("'[%-5d]'.format('test') throws TypeError", function() {
        expect( function() { '[%-5d]'.format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
    });

    describe("%s", function(){
      it("'This is a %s'.format('pen') === 'This is a pen'", function() {
        expect('This is a %s'.format('pen')).to.equal('This is a pen');
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
      it("'[%12s]'.format('abc') === '[         abc]'", function() {
        expect('[%12s]'.format('abc')).to.equal('[         abc]');
      });
      it("'[%-5s]'.format('abc') === '[abc  ]'", function() {
        expect('[%-5s]'.format('abc')).to.equal('[abc  ]');
      });
      it("'[%-12s]'.format('abc') === '[abc         ]'", function() {
        expect('[%-12s]'.format('abc')).to.equal('[abc         ]');
      });
      it("'[%.4s]'.format('abcde') === '[abcd]'", function() {
        expect('[%.4s]'.format('abcde')).to.equal('[abcd]');
      });
      it("'[%.12s]'.format('abcdefghijklmn') === '[abcdefghijkl]'", function() {
        expect('[%.12s]'.format('abcdefghijkl')).to.equal('[abcdefghijkl]');
      });
      it("'[%5.4s]'.format('abcde') === '[ abcd]'", function() {
        expect('[%5.4s]'.format('abcde')).to.equal('[ abcd]');
      });
      it("'[%12.10s]'.format('abcdefghijklmnopq') === '[  abcdefghij]'", function() {
        expect('[%12.10s]'.format('abcdefghijklmnopq')).to.equal('[  abcdefghij]');
      });
      it("'[%-5.4s]'.format('abcde') === '[abcd ]'", function() {
        expect('[%-5.4s]'.format('abcde')).to.equal('[abcd ]');
      });
      it("'[%-12.10s]'.format('abcdefghijklmnopq') === '[  abcdefghij]'", function() {
        expect('[%-12.10s]'.format('abcdefghijklmnopq')).to.equal('[abcdefghij  ]');
      });
      it("'[%-5.4s]'.format('あいうえお') === '[あいうえ ]'", function() {
        expect('[%-5.4s]'.format('あいうえお')).to.equal('[あいうえ ]');
      });
      it("'%s'.format(true) === 'true'", function() {
        expect('%s'.format(true)).to.equal('true');
      });
      it("'%s'.format('true') === 'true'", function() {
        expect('%s'.format('true')).to.equal('true');
      });
      it("'%s'.format(false) === 'false'", function() {
        expect('%s'.format(false)).to.equal('false');
      });
      it("'%s'.format('false') === 'false'", function() {
        expect('%s'.format('false')).to.equal('false');
      });
      it("'%s'.format('$$') === '$$'", function() {
        expect('%s'.format('$$')).to.equal('$$');
      });
      it("'%s'.format('$$$$') === '$$$$'", function() {
        expect('%s'.format('$$$$')).to.equal('$$$$');
      });
      it("'%s'.format('$&') === '$&'", function() {
        expect('%s'.format('$&')).to.equal('$&');
      });
      it("'%s'.format('$`') === '$`'", function() {
        expect('%s'.format('$`')).to.equal('$`');
      });
      it("'%s'.format('$\'') === '$\''", function() {
        expect('%s'.format('$\'')).to.equal('$\'');
      });
      it("'[%5s]'.format('$$') === '[   $$]'", function() {
        expect('[%5s]'.format('$$')).to.equal('[   $$]');
      });
      it("'[%-5s]'.format('$$') === '[$$   ]'", function() {
        expect('[%-5s]'.format('$$')).to.equal('[$$   ]');
      });
      it("'[%.5s]'.format('abc$$fg') === '[abc$$]'", function() {
        expect('[%.5s]'.format('abc$$fg')).to.equal('[abc$$]');
      });
      it("'[%.4s]'.format('abc$$fg') === '[abc$]'", function() {
        expect('[%.4s]'.format('abc$')).to.equal('[abc$]');
      });
      it("'[%5.5s]'.format('abc$$fg') === '[abc$$]'", function() {
        expect('[%5.5s]'.format('abc$$fg')).to.equal('[abc$$]');
      });
      it("'[%5.4s]'.format('abc$$fg') === '[ abc$]'", function() {
        expect('[%5.4s]'.format('abc$$fg')).to.equal('[ abc$]');
      });
      it("'[%-5.5s]'.format('abc$$fg') === '[abc$$]'", function() {
        expect('[%-5.5s]'.format('abc$$fg')).to.equal('[abc$$]');
      });
      it("'[%-5.4s]'.format('abc$$fg') === '[abc$ ]'", function() {
        expect('[%-5.4s]'.format('abc$$fg')).to.equal('[abc$ ]');
      });
    });

    describe("%o", function() {
      it("'123 => %o'.format(123) === '123 => 173'", function() {
        expect('123 => %o'.format(123)).to.equal('123 => 173');
      });
      it("'123 => %o'.format('123') === '123 => 173'", function() {
        expect('123 => %o'.format('123')).to.equal('123 => 173');
      });
      it("'0x7b => %o'.format(0x7b) === '0x7b => 173'", function() {
        expect('0x7b => %o'.format(0x7b)).to.equal('0x7b => 173');
      });
      it("'0x7b => %o'.format('0x7b') === '0x7b => 173'", function() {
        expect('0x7b => %o'.format('0x7b')).to.equal('0x7b => 173');
      });

      it("'%o'.format('test') throws TypeError", function() {
        expect( function() { "%o".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });

    });

    describe("%b", function() {
      it("'123 => %b'.format(123) === '123 => 1111011'", function() {
        expect('123 => %b'.format(123)).to.equal('123 => 1111011');
      });
      it("'123 => %b'.format('123') === '123 => 1111011'", function() {
        expect('123 => %b'.format('123')).to.equal('123 => 1111011');
      });
      it("'0x7b => %b'.format(0x7b) === '0x7b => 1111011'", function() {
        expect('0x7b => %b'.format(0x7b)).to.equal('0x7b => 1111011');
      });
      it("'0x7b => %b'.format('0x7b') === '0x7b => 1111011'", function() {
        expect('0x7b => %b'.format('0x7b')).to.equal('0x7b => 1111011');
      });

      it("'%b'.format('test') throws TypeError", function() {
        expect( function() { "%b".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });

    });

    describe("%x", function() {
      it("'123 => %x'.format(123) === '123 => 7b", function() {
        expect('123 => %x'.format(123)).to.equal('123 => 7b');
      });
      it("'123 => %x'.format('123') === '123 => 7b", function() {
        expect('123 => %x'.format('123')).to.equal('123 => 7b');
      });
      it("'%x'.format('test') throws TypeError", function() {
        expect( function() { "%x".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
    });

    describe("%X", function() {
      it("'123 => %X'.format(123) === '123 => 7B", function() {
        expect('123 => %X'.format(123)).to.equal('123 => 7B');
      });
      it("'123 => %X'.format('123') === '123 => 7B", function() {
        expect('123 => %X'.format('123')).to.equal('123 => 7B');
      });
      it("'%X'.format('test') throws TypeError", function() {
        expect( function() { "%X".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
    });

    describe("%u", function() {
      it("'%u'.format(0x12345678 ^ 0xFFFFFFFF) === '3989547399'", function() {
        expect('%u'.format(0x12345678 ^ 0xFFFFFFFF)).to.equal('3989547399');
      });
      it("'%u'.format(-1) === '4294967295'", function() {
        expect('%u'.format(-1)).to.equal('4294967295');
      });
      it("'%u'.format('-1') === '4294967295'", function() {
        expect('%u'.format('-1')).to.equal('4294967295');
      });
      it("'%u'.format('test') throws TypeError", function() {
        expect( function() { "%u".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
      });
    });

    describe("%c", function(){
      it("'%c'.format(97) === 'a'", function() {
        expect('%c'.format(97)).to.equal('a');
      });
      it("'%c'.format('97') === 'a'", function() {
        expect('%c'.format('97')).to.equal('a');
      });
      it("'%c'.format(0x61) === 'a'", function() {
        expect('%c'.format(0x61)).to.equal('a');
      });
      it("'%c'.format('0x61') === 'a'", function() {
        expect('%c'.format('0x61')).to.equal('a');
      });
      it("'%c'.format('test') throws TypeError", function() {
        expect( function() { "%c".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
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
      it("'%f'.format('test') throws TypeError", function() {
        expect( function() { "%f".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
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
      it("'%e'.format('test') throws TypeError", function() {
        expect( function() { "%e".format('test'); }).to.throwException(function(e) {
          expect(e).to.be.a(TypeError);
        });
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
      it("'#{a} #{b}, #{c} #{d}'.format({a:'Easy', b:'come', c:'easy', d:'go'}) === 'Easy come, easy go'", function() {
        expect('#{a} #{b}, #{c} #{d}'.format({
          a: 'Easy',
          b: 'come',
          c: 'easy',
          d: 'go'
        })).to.equal('Easy come, easy go');
      });
      it("'#{a} #{b}, #{a} #{c}'.format({a:'Easy', b:'come', c:'go'}) === 'Easy come, Easy go'", function() {
        expect('#{a} #{b}, #{a} #{c}'.format({
          a: 'Easy',
          b: 'come',
          c: 'go'
        })).to.equal('Easy come, Easy go');
      });
      it("'#{a} #{a} #{a}'.format({a:'hello'}) === 'hello hello hello'", function() {
        expect('#{a} #{a} #{a}'.format({
          a: 'hello'
        })).to.equal('hello hello hello');
      });
    });
  });
});
