function getTime(): number {
    return new Date().getTime();
  }

  console.log(getTime())

  function add() : number { 
    let x = 3 
    let y = 7 
    return x + y
  }




  function Voidedadd() : void { 
    let x = 3 
    let y = 7 
    // return x + y // Doesntallow return becasue its a void type 
  }




// Types for function prams 
  function multiply(a: number, b: number) {
    return a * b;
  }
  console.log(multiply(8,8))