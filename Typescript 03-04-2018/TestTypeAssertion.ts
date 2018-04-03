var str = '1';
var str2:number = <number> <any> str;   //str is now of type number 
console.log(str2);
console.log(typeof str2);
var sum: number = 5;
console.log(typeof sum);

sum += str2;

console.log(sum);
console.log(typeof sum);
