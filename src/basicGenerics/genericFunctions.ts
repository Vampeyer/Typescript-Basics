// 1. Generic Functions
// Generic functions allow you to create functions that can work with
//  any data type while still maintaining type safety.
//  By using type variables, you can write a function tha
//  t accepts parameters 
//  and returns values of various types specified
//   at the time of function invocation.



function generic<Ti>(arg: Ti) : Ti { 
    return arg
}


let result3 = generic<number>(54);

console.log(result3)

let result4 = generic<string>("Hello World , this is a explicit generic type") 

console.log(result4)
let result5 = generic("This is an implicit generic type ")

console.log(result5)


// Explanation:
// The function identity has a type parameter <T>, which captures the type of the argument arg.
// When calling identity, you can explicitly specify the type, like identity<number>(42), or let TypeScript infer it.
// The function returns a value of the same type as the argument, ensuring type safety.