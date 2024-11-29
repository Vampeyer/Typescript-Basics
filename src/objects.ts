// Type Inference
// TypeScript can infer the types of properties based on their values.

let objectSamp = { first: 1} 
//  objectSamp.first = "strang" /// Will throw an eror

objectSamp.first = 90
console.log(objectSamp)




let obbjy2:  { type : string , height : number } =  { 
    type : "mountain" , height:5250
}
console.log(obbjy2)




// Optional properties are 
// properties that don't have to be defined
//  in the object definition.


let obbjy3:  { type : string , height? : number } =  { 
    type : "mountain" 
}
console.log(obbjy3)







///  INDEX SIGNATURES /// 
// Index Signatures
// Index signatures can be used for objects 
// without a defined list of properties.



const nameAgeMap: { [index: string]: string} = {};
nameAgeMap.Jack = "Jacks Name "; // no error


const numberAgeMap: { [index: string]: number } = {}
numberAgeMap.Mark = 50; // Error: Type 'string' is not assignable to type 'number'.