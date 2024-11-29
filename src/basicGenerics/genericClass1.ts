class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }
  
  // Usage:
  
  let numberInstance = new GenericNumber<number>();
  numberInstance.zeroValue = 0;
  numberInstance.add = function (x, y) {
    return x + y;
  };
  console.log(numberInstance.add(10, 20)); // Output: 30
  
  let stringInstance = new GenericNumber<string>();
  stringInstance.zeroValue = "";
  stringInstance.add = function (x, y) {
    return x + y;
  };
  console.log(stringInstance.add("Hello, ", "World!")); // Output: "Hello, World!"





//   Explanation:
// The GenericNumber class has a type parameter <T>, making it flexible
//  to work with any type.
// It includes a property zeroValue of type T and a method add that takes
//  two parameters of type T and returns a T.
// Instances of GenericNumber can be created with different types, such as 
// number and string, each functioning correctly with their respective 
// types.