var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charCodeAt(0));
console.log("str.charAt(1) is:" + str.charCodeAt(1));
console.log("str.charAt(-1) is:" + str.charCodeAt(-1));
var str1 = "This is string one";
var str2 = new String("This is string two");
var str3 = str1.concat(str2);
console.log("str1 + str2 : " + str3);