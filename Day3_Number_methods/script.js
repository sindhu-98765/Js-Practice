//Number Methods

let a = "amma";
let b = Number(a);
console.log(b); //NaN
console.log(typeof b); //number

let c = 123.456789;
console.log(c.toFixed(2)); //123.46
console.log(c.toPrecision(4)); //123.5  
console.log(c.toString()); // "123.456789"
console.log(typeof c.toString()); //string
console.log(c.valueOf()); //123.456789
console.log(parseInt(14.999999)); //14
console.log(parseFloat(14.999999)); //14.999999
