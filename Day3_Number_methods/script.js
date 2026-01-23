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


// Type Coercion => js converts one data type to another data type automatically
let d = "15";
let e = 10;
console.log(d + e); //1510
console.log(typeof (d + e)); //string
console.log(d-e_); //5
console.log(typeof (d - e)); //number
console.log(d/e); //1.5
console.log(typeof (d / e)); //number
console.log(d*e);//150
console.log(typeof (d * e)); //number


//Type Conversion => we convert one data type to another data type manually
let x="5"
let y=10;
console.log(Number(x)+y); //15
console.log(String(y)+x); //105
