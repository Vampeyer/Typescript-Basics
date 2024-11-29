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
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
var StatusNames;
(function (StatusNames) {
    StatusNames["good"] = "Accepted";
    StatusNames["bad"] = " Lost Connection Previously  ";
    StatusNames["notAvailable"] = " Not available at the moment";
})(StatusNames || (StatusNames = {}));
console.log(StatusNames.good);
