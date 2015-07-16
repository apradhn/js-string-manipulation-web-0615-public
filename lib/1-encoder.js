'use strict';

var encoder = function(string){
  var code;
  code = string.replace(/e/gi, "3")
  .replace(/i/g, "1")
  .replace(/I/g, "!")
  .replace(/a/gi, "4");
  return code;
};
