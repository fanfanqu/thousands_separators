'use strict';

function thousands_separators(num) {
	 var num= num.toString().split(".");
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num.join(".");
  
}

 module.exports = thousands_separators;

