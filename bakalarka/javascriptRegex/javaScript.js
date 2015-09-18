/*var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log(myArray);*/
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
