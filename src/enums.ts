// An enum is a special "class" that represents a group of constants 
// (unchangeable variables).

// Enums come in two flavors string and numeric. 
// Lets start with numeric.

// Numeric Enums - Default
// By default, enums will initialize the 
// first value to 0 and add 1 to each additional value:


// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

// Example
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);




enum StatusNames { 
    good = "Accepted" , 
    bad  = " Lost Connection Previously  ",
    notAvailable = " Not available at the moment"
 }

console.log(StatusNames.good)