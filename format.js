/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

String.prototype.format = function() {
  'use strict';

  // console.log("");
  // console.log(this);
  // console.log(arguments);
  // console.log("------");

  var i,
      result = this,
      args = Array.prototype.slice.call(arguments),
      PATTERN_DECIMAL = /%0?(\d*)d/,
      matchResult,

      len
  ;

  for (i=0; i <args.length; i+=1) {
    if (typeof args[i] === 'number') {
      matchResult = result.match(PATTERN_DECIMAL); // ptn = getPattern(result); ptn.format();
      if (matchResult !== null) {
        if (RegExp.$1 !== '') {
          len = RegExp.$1 - args[i].toString().length;
          if (len > 0) {
            result = result.replace(
              PATTERN_DECIMAL,
              (new Array(len + 1).join("0") + args[i]).slice(-RegExp.$1)
            );
          }
        }
        else {
          result = result.replace(PATTERN_DECIMAL, args[i]);
        }
      }
    }
  }
  return result;
};
