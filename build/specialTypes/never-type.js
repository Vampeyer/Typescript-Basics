// Type: never
// never effectively throws an error whenever it is defined.
var x;
// X can never be defined as anything
console.log(x);
// Error: Type 'boolean' is not assignable to type 'never'.
//////
/// In vanilla , this can be easily accomplished with ,  
// const x = undefined , 
//else , error
