class Container<T> {
    private _value: T;
  
    constructor(value: T) {
      this._value = value;
    }
  
    getValue(): T {
      return this._value;
    }
  
    setValue(value: T): void {
      this._value = value;
    }
  }
  
  const numberContainer = new Container<number>(100);
  console.log(numberContainer.getValue()); // 100
  
  numberContainer.setValue(200);
  console.log(numberContainer.getValue()); // 200
  
  const stringContainer = new Container<string>("Generics in TypeScript");
  console.log(stringContainer.getValue()); // "Generics in TypeScript"



//   Container<T> is a generic 
//   class, where T is a placeholder for the type.
// This class can be instantiated with different data 
// types, like number or string.