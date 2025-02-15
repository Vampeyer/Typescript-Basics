// keyof with explicit keys
// When used on an object type with
//  explicit keys, keyof creates a union type with those keys.

interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }
  let person5 = {
    name: "Max",
    age: 27
  };
  printPersonProperty(person5, "name"); // Printing person property name: "Max"