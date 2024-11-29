// TypeScript has a specific syntax for typing function parameters and return values.

// Read more about functions here.

// Return Type
// The type of the value returned by the function can be explicitly defined.

// ExampleGet your own TypeScript Server
// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime)




// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
    console.log('Hello!');
  }

console.log(printHello())




// Parameters
// Function parameters are 
//typed with a similar syntax as variable declarations.


function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(2,6))