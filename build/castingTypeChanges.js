// TypeScript Casting
// There are times when working with types where it's 
// necessary to override the type of a variable, such as 
// when incorrect types are provided by a library.
// Casting is the process of overriding a type.
// Casting with as
// A straightforward way to cast a variable is using the as
//  keyword, which will directly change the type of the given variable.
var sampleString = "sample";
var sampleNumber = 34;
console.log(String(sampleNumber));
console.log(sampleString);
// Force casting
// To override type errors that TypeScript may throw 
// when casting, first cast to unknown, then to the target type.
