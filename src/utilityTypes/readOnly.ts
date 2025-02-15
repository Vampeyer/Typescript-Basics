// Readonly
// Readonly is used to create a new type where all properties 
// are readonly, meaning they cannot be modified 
// once assigned a value, or it throws an error. 

interface Person {
    name: string;
    age: number;
  }
  const person: Readonly<Person> = {
    name: "Dylan",
    age: 35,
  };


//   person.name = 'Israel' ; /// ERrOR !!!!!!! 


  // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.