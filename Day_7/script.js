           // 1).OR (||) operator

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


//          2).  && (AND) OPERATOR
//Rule (mirror of ||)

//Returns the first falsy value
// If all are truthy, returns the last value

//Examples
console.log(true && "JS");//Output: "JS" (all truthy → last)
console.log(0 && "Hello");// Output: 0 (first falsy)
console.log("Hi" && "" && "Bye");// Output: ""
console.log("User" && "LoggedIn" && 1);//Output: 1



//Real-world example:
isLoggedIn && showDashboard();
If isLoggedIn is falsy → function won’t run.


//        3).   ?? (Nullish Coalescing)

//Returns right value only if left is null or undefined
// Does NOT treat 0, "", false as empty

//Examples:
console.log(0 ?? 10);        // 0
console.log("" ?? "Text");  // ""
console.log(null ?? 5);     // 5
console.log(undefined ?? 7);// 7

// This fixes the || bug.

//   4).Truthy/Falsy in if
let value = "";
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// Output: "Falsy"



//   ********     || vs ??   ******** 
let count = 0;

console.log(count || 5); // 5 
console.log(count ?? 5); // 0 
