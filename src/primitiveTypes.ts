
// Type: Primitive types , like  undefined & null
// undefined and null are types that refer to
//  the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;
let z: null = null;

// all the other primitives in Js  

let stringy : string = "a string example"
let numberie : number = 43 

let obby : object = { "key":"value" }


// TypeScript Object Types

let obby2 : { firstKey : string , secondKey : number , thirdKey : number } = 
{ firstKey : "Ford" , secondKey: 2020 , thirdKey: 4.5 }

console.log(obby2)





let sampleArray : readonly string[]  = ["thing1" , "thing2"]


let samplenumArray : readonly number[]  = [23,4,3232432,4,234,2]

console.log(sampleArray ,  " & " , samplenumArray)

let pushableStringArray = ["one" , "two"] 
pushableStringArray.push("three")
console.log(pushableStringArray)

//Tuples 



