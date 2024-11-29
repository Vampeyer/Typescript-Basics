



function item<T> (value: T) : T { 
    return value 
}

let genericObj = item<object>( { "key1": "value1" , "key2" : "value2" })

console.log(genericObj)





function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]