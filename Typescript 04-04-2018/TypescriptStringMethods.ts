var str = new String("This is string");
console.log("str.charAt(0) is:" + str.charCodeAt(0));
console.log("str.charAt(1) is:" + str.charCodeAt(1));
console.log("str.charAt(-1) is:" + str.charCodeAt(-1));
var str1 = " This is string one";
var str2 = " This is string two";
var str3 = str.concat(str1, str2);
console.log("str1 + str2 : " + str3);


// var st = new String( "This is string one" ); 
 
// var index = st.indexOf( "string" ); 
// console.log("indexOf found String :" + index );

// var index = str3.indexOf( "is", 8 ); 
// console.log("indexOf found String :" + index );


var index = str3.lastIndexOf( "is" ); 
console.log("indexOf found String :" + index );