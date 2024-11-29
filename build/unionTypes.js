// TypeScript Union Types
// Union types are used when a value can be more than a single type.
// Such as when a property would be string or number.
// Union | (OR)
// Using the | we are saying our parameter is a string or number:
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
// let sampleVar : string | object
// sampleVar = ["t" , "d"]
// console.log("sample var 1 is  " , sampleVar)
// console.log(sampleVar = "Jimmy")
//console.log(sampleVar = 22)
// NOTE -  UNION TYPES OF AN ARRAY HAS A BUG  , 
// FOR EXAMPLE ON LINE  // 32 , HERE ,  
// THIS SHOULD REQUIRE AN ARRAY AS A STRING LIKE "STRING[]" 
// However , this code executes with no problems.
var sampleVar2;
sampleVar2 = [2, 9, 9, 0];
console.log(sampleVar2);
console.log(" sample var 2  is ", sampleVar2);
//console.log(sampleVar2 = 22)
