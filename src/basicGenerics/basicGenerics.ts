// 1. Generic Functions
// Generic functions allow you to
//   create functions that can work 
//   with any data type while still
//    maintaining type safety. By using
//     type variables, you can write 
//     a function that accepts
//      parameters and returns values of various 
//      types specified at the time of
//       function invocation.

function identity<T>(arg: T): T {
    return arg;
  }
  
  // Usage:
  
  // Explicitly specifying the type
  let result1 = identity<number>(42); // result1 is of type number
  
  // Type inference
  let result2 = identity("Hello, TypeScript!"); // result2 is of type string


  console.log(result1 , result2)