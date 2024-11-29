function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function add() {
    var x = 3;
    var y = 7;
    return x + y;
}
function Voidedadd() {
    var x = 3;
    var y = 7;
    // return x + y // Doesntallow return becasue its a void type 
}
// Types for function prams 
function multiply(a, b) {
    return a * b;
}
console.log(multiply(8, 8));
