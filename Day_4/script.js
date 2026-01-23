//NaN  => Not a Number

console.log(NaN === NaN); // Output: false =>because NaN is not equal to anything, including itself
console.log(typeof NaN); // Output: number
console.log(0 / 0); // Output: NaN

console.log("10"+20); // Output: 1020 (string concatenation)
console.log("Hello" + 5); // Output: Hello5 (string concatenation)
console.log(typeof ("Hello" - 5)); // Output: number
console.log("Hello" - 5); // Output: NaN
console.log("Hello" * 2); // Output: NaN
console.log("Hello" / 2); // Output: NaN

console.log(Math.sqrt(-1)); // Output: NaN
console.log(parseInt("abc")); // Output: NaN
console.log(Number("xyz")); // Output: NaN



//isNaN() => to check whether the value is NaN or not
let value1 = "Hello";
let value2 = 123;
let value3 = "123abc";
let value4 = NaN;   
console.log(isNaN(value1)); // true, "Hello" is not a number
console.log(isNaN(value2)); // false, 123 is a number
console.log(isNaN(value3)); // true, "123abc" is not a number
console.log(isNaN(value4)); // true, NaN is not a number    

// MY INSIGHTS ON NaN IN JS:
    // NaN is a special numeric value that represents "Not a Number".
   // It is of type 'number' but indicates an invalid or undefined numerical result.
  // Any operation that results in an undefined or unrepresentable number will yield NaN.
 // NaN is not equal to anything, including itself, so comparisons involving NaN always return false.
    // To check if a value is NaN, we can use the isNaN() function.
// NaN often arises from invalid mathematical operations, such as dividing zero by zero or performing arithmetic on non-numeric strings.