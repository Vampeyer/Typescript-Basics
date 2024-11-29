// TypeScript Type Aliases and Interfaces

// TypeScript allows types to be defined separately from the 
// variables that use them.

// Aliases and Interfaces allows types to be easily shared 
// between different variables/objects.

// Type Aliases
// Type Aliases allow defining types with a custom name 
// (an Alias).

// Type Aliases can be used for primitives like string
//  or more complex types such as objects and arrays:


// Custom Types  
type firstName = string
type lastName = string
type age = number
type powerLevel = number
type capabilityLevel = number 
type AuthorizationLevel = boolean



type Dude = { 
    name1 : firstName, 
    name2 : lastName, 
    age : age, 
    power : powerLevel, 
    capability : capabilityLevel, 
    Authorized : AuthorizationLevel
}

const dudesName :firstName = "Jim"
const dudesLastName : lastName = "Whittman"
const dudesAge :age = 99
const dudesPower : powerLevel = 50000
const capability: capabilityLevel = 19999999.23
const dudesAuth: AuthorizationLevel = true

let theDude =  { 
    name: dudesName, 
    lastName: dudesLastName, 
    age : dudesAge, 
    power : dudesPower, 
    capableness : capability,
    authLVL : dudesAuth
}


console.log( "this is my super typesafe dude " , theDude  )