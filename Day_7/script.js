           // OR (||) operator

 //Returns the first truthy value 
// of alla res falsy values,then return the last falsy value.


 let a = 0;
 let b = null;
 let c = "Hello";
 let d= undefined;
 
 console.log( a || b || c); // Output: "Hello"
 console.log(b || a); // Output: 0
 console.log(a || b); // Output: null
 console.log(a || c); // Output: "Hello"
 console.log(d || b || a); // Output: 0

 
//      ||(operator) => Returns the first truthy value (or) the last value if all are falsy.

console.log(0||10); //10
console.log(null||"Hi"); // "Hi"
console.log(undefined||false||"JavaScript"); // "JavaScript"
console.log(false||0||null); // null
console.log(" "||42); // 42
console.log(""||null||undefined||"OpenAI"); // "OpenAI"
console.log(false||""||0); // 0
console.log("Hello"||"World"); // "Hello"
console.log(100||200); // 100
 
// Tricky"
console.log(0||"0"); // "0"
console.log(""||" "); // " "
console.log(null||undefined||NaN||"False"); // "False"
console.log(false||"false"||true); // "false"

//Real World Example
let user = null;
let userName = user || "Guest";

console.log(`Welcome ${userName}`); // Output: "Welcome Guest"
