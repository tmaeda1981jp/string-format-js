/*jslint white: true, nomen: true, maxlen: 120, plusplus: true, */
/*global _:false, $:false, define:false, require:false, */

(function(global, undefined) {

  'use strict';

  var string = global.String;

  if (!string.prototype.format) {

    string.prototype.format = function() {

      var i,
          result = this,
          args = Array.prototype.slice.call(arguments),

          Formatter = (function() {
            var Constr = function(identifier) {
              var array = function(len){ return new Array(len); };

              switch(true) {
              case /^([ds])$/.test(identifier):
                // TODO dならparamはnumber, sならparamはstringのチェック
                this.formatter = function(line, param) {
                  return line.replace("%" + identifier, param);
                };
                break;

                // Octet
              case /^(o)$/.test(identifier):
                this.formatter = function(line, param) {
                  return line.replace("%" + identifier, param.toString(8));
                };
                break;

                // Binary
              case /^(b)$/.test(identifier):
                this.formatter = function(line, param) {
                  return line.replace("%" + identifier, param.toString(2));
                };
                break;

              case /^(u)$/.test(identifier):
                this.formatter = function(line, param) {
                  return line.replace("%" + identifier, param >>> 0);
                };
                break;

              case /^([xX])$/.test(identifier):
                this.formatter = function(line, param) {
                  var hex = param.toString(16);
                  if (identifier === 'X') { hex = hex.toUpperCase(); }
                  return line.replace("%" + identifier, hex);
                };
                break;

                // Decimal
              case /^([0\-]?)([1-9])d$/.test(identifier):
                  this.formatter = function(line, param) {
                    var len = RegExp.$2 - param.toString().length,
                        replaceString = '',
                        result;
                    if (len < 0) { len = 0; }
                    switch(RegExp.$1) {
                    case "": // rpad
                      replaceString = (array(len + 1).join(" ") + param).slice(-RegExp.$2);
                      break;
                    case "-": // lpad
                      replaceString = (param + array(len + 1).join(" ")).slice(-RegExp.$2);
                      break;
                    case "0": // 0pad
                      replaceString = (array(len + 1).join("0") + param).slice(-RegExp.$2);
                      break;
                    default:
                      // TODO throw ?
                    }
                    return line.replace("%" + identifier, replaceString);
                  };
                break;

                // String
              case /^(-?)(\d)s$/.test(identifier):
                  this.formatter = function(line, param) {
                    var len = RegExp.$2 - param.toString().length,
                        replaceString = '',
                        result;
                    if (len < 0) { len = 0; }
                    switch(RegExp.$1) {
                    case "": // rpad
                      replaceString = (array(len + 1).join(" ") + param).slice(-RegExp.$2);
                      break;
                    case "-": // lpad
                      replaceString = (param + array(len + 1).join(" ")).slice(-RegExp.$2);
                      break;
                    default:
                      // TODO throw ?
                    }
                    return line.replace("%" + identifier, replaceString);
                  };
                break;

                // String with max length
              case /^(-?\d?)\.(\d)s$/.test(identifier):
                  this.formatter = function(line, param) {
                    var replaceString = '',
                        max, spacelen;

                    // 桁数指定なし %.4s
                    if (RegExp.$1 === '') {
                      replaceString = param.slice(0, RegExp.$2);
                    }
                    // 桁数指定あり %5.4s %-5.4s
                    else {
                      param = param.slice(0, RegExp.$2);
                      max = Math.abs(RegExp.$1);
                      spacelen = max - param.toString().length;
                      replaceString = RegExp.$1.indexOf('-') !== -1 ?
                        (param + array(spacelen + 1).join(" ")).slice(-max): // lpad
                        (array(spacelen + 1).join(" ") + param).slice(-max); // rpad
                    }
                    return line.replace("%" + identifier, replaceString);
                  };
                break;
              default:
                console.log("not match"); // TODO
              }
            };

            Constr.prototype = {
              format: function(line, param) {
                return this.formatter.call(this, line, param);
              }
            };
            return Constr;
          }());

      for (i=0; i <args.length; i+=1) {
        if (result.match(/%([.#0-9\-]*[bcdosuxX])/)) {
          result = new Formatter(RegExp.$1).format(result, args[i]);
        }
      }
      return result;
    };

  }

}(global !== 'undefined' ? global : window));

