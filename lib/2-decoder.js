'use strict';

var decoder = function(string){
  var uncode; 
  uncode = string.replace(/[3]/g, "e")
  .replace(/[1]/g, "i")
  .replace(/!/g, "I")
  .replace(/[4]/g, "a");
  return uncode;
};
