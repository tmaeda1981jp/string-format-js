# string-format-js

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![NPM version](http://img.shields.io/npm/v/string-format-js.svg)](https://npmjs.org/package/string-format-js) [![Build Status](https://travis-ci.org/tmaeda1981jp/string-format-js.png?branch=master)](https://travis-ci.org/tmaeda1981jp/string-format-js) [![Coverage Status](https://coveralls.io/repos/github/tmaeda1981jp/string-format-js/badge.svg?branch=master)](https://coveralls.io/github/tmaeda1981jp/string-format-js?branch=master) [![Downloads](https://img.shields.io/npm/dm/string-format-js.svg)](https://www.npmjs.com/package/string-format-js)

## Synopsis

String format function for javascript.

## Code Example

### %d

```javascript
'%d'.format(10) === '10'
'%d, %d'.format(5, 10) === '5, 10'
'%d, %d and %d'.format(5, 10, 15) === '5, 10 and 15'
'%05d'.format(123) === '00123'
'%03d, %05d'.format(1, 123) === '001, 00123'
'[%5d]'.format(123) === '[ 123]'
'[%10d]'.format(123) === '[      123]'
'[%-5d]'.format(123) === '[123 ]'
'[%-10d]'.format(123) === '[123      ]'
```

### %s

```javascript
'This is a %s'.format('pen') === 'This is a pen'
'This is %s %s'.format('a', 'pen') === 'This is a pen'
'This %s %s %s'.format('is', 'a', 'pen') === 'This is a pen'
'[%5s]'.format('abc') === '[  abc]'
'[%12s]'.format('abc') === '[         abc]'
'[%-5s]'.format('abc') === '[abc  ]'
'[%-12s]'.format('abc') === '[abc         ]'
'[%.4s]'.format('abcde') === '[abcd]'
'[%.12s]'.format('abcdefghijklmn') === '[abcdefghijkl]'
'[%5.4s]'.format('abcde') === '[ abcd]'
'[%12.10s]'.format('abcdefghijklmnopq') === '[  abcdefghij]'
'[%-5.4s]'.format('abcde') === '[abcd ]'
'[%-12.10s]'.format('abcdefghijklmnopq') === '[  abcdefghij]'
'[%-5.4s]'.format('あいうえお') === '[あいうえ ]'
'%s'.format(true) === 'true'
'%s'.format('true') === 'true'
'%s'.format(false) === 'false'
'%s'.format('false') === 'false'
'%s'.format('$$') === '$$'
'%s'.format('$$$$') === '$$$$'
'%s'.format('$&') === '$&'
'%s'.format('$`') === '$`'
'%s'.format('$'') === '$''
'[%5s]'.format('$$') === '[   $$]'
'[%-5s]'.format('$$') === '[$$   ]'
'[%.5s]'.format('abc$$fg') === '[abc$$]'
'[%.4s]'.format('abc$$fg') === '[abc$]'
'[%5.5s]'.format('abc$$fg') === '[abc$$]'
'[%5.4s]'.format('abc$$fg') === '[ abc$]'
'[%-5.5s]'.format('abc$$fg') === '[abc$$]'
'[%-5.4s]'.format('abc$$fg') === '[abc$ ]'
```

### %o

```javascript
'123 => %o'.format(123) === '123 => 173'
'0x7b => %o'.format(0x7b) === '0x7b => 173'
```

### %b

```javascript
'123 => %b'.format(123) === '123 => 1111011'
'0x7b => %b'.format(0x7b) === '0x7b => 1111011'
```

### %x

```javascript
'123 => %x'.format(123) === '123 => 7b'
```

### %X

```javascript
'123 => %X'.format(123) === '123 => 7B'
```

### %u

```javascript
'%u'.format(0x12345678 ^ 0xFFFFFFFF) === '3989547399'
'%u'.format(-1) === '4294967295'
```

### %c

```javascript
'%c'.format(97) === 'a'
'%c'.format(0x61) === 'a'
```

### %f

```javascript
'%f'.format(1.0) === '1.000000'
'%.2f'.format(1.0) === '1.00'
'[%10f]'.format(1.0) === '[1.00000000]'
'[%10.2f]'.format(1.0) === '[      1.00]'
'[%10.2f]'.format(1.2345) === '[      1.23]'
'[%-10.2f]'.format(1.0) === '[1.00      ]'
```
### %e

```javascript
'%e'.format(123) === '1.23e+2'
'%e'.format(123.45) === '1.2345e+2'
'%.5e'.format(123.45) === '1.23450e+2'
'[%15e]'.format(123.45) === '[1.2345000000e+2]'
'[%20e]'.format(12345678901.45) === '[1.23456789014500e+10]'
'[%15.2e]'.format(123.45) === '[        1.23e+2]'
'[%7.2e]'.format(123.45) === '[1.23e+2]'
'[%-15.2e]'.format(123.45) === '[1.23e+2        ]'
```
### hash

```javascript
'#{name}'.format({name:'Takashi Maeda'}) === 'Takashi Maeda'
'#{first} #{last}'.format({first:'Takashi', last:'Maeda'}) === 'Takashi Maeda'
'#{a} #{b}, #{c} #{d}'.format(a:'Easy', b:'come', c:'easy', d:'go'}) === 'Easy come, easy go'
'#{a} #{b}, #{a} #{c}'.format({a:'Easy', b:'come', c:'go'}) === 'Easy come, Easy go'
'#{a} #{a} #{a}'.format({a:'hello'}) === 'hello hello hello'
```

## Installation

### node

```bash
$ npm install string-format-js
```

### bower

```bash
$ bower install string-format-js
```

## Tests

### node

```bash
$ grunt mochaTest
```

### browser

```bash
$ grunt browserTest
```

## License

This software is released under the MIT License, see LICENSE.txt.
