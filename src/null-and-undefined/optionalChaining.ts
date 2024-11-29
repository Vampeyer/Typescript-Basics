// When strictNullChecks is enabled, TypeScript requires values to be set 
// unless undefined is explicitly added to the type.

// Optional Chaining
// Optional Chaining is a JavaScript feature that works well with
//  TypeScript's null handling. It allows accessing properties on 
//  an object, that may or may not exist, with a compact syntax.
//   It can be used with the ?. operator when accessing properties.




interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }
  function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log('No yard');
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }
  
  let home: House = {
    sqft: 500
  };
  
  printYardSize(home); // Prints 'No yard'