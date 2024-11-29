// Type Inference
// TypeScript can infer the types of properties based on their values.
var objectSamp = { first: 1 };
//  objectSamp.first = "strang" /// Will throw an eror
objectSamp.first = 90;
console.log(objectSamp);
var obbjy2 = {
    type: "mountain", height: 5250
};
console.log(obbjy2);
// Optional properties are 
// properties that don't have to be defined
//  in the object definition.
var obbjy3 = {
    type: "mountain"
};
console.log(obbjy3);
///  INDEX SIGNATURES /// 
// Index Signatures
// Index signatures can be used for objects 
// without a defined list of properties.
var nameAgeMap = {};
nameAgeMap.Jack = "Jacks Name "; // no error
var numberAgeMap = {};
numberAgeMap.Mark = 50; // Error: Type 'string' is not assignable to type 'number'.
