// 1. Generic Functions
// Generic functions allow you to create functions that can work with
//  any data type while still maintaining type safety.
//  By using type variables, you can write a function tha
//  t accepts parameters 
//  and returns values of various types specified
//   at the time of function invocation.
function generic(arg) {
    return arg;
}
var result3 = generic(54);
console.log(result3);
var result4 = generic("Hello World , this is a explicit generic type");
console.log(result4);
var result5 = generic("This is an implicit generic type ");
console.log(result5);
