                        // Math methods
// Math is a built-in object in JavaScript that provides various mathematical constants and functions.

 console.log(Math.ceil(4.5)); // output: 5 (rounds up to nearest integer)
 console.log(Math.floor(4.5)); // output: 4 (rounds down to nearest integer)     
 console.log(Math.round(4.5)); // output: 5 (rounds to nearest integer)

console.log(Math.abs(-10)); // output: 10 (absolute value of -10)

console.log(Math.sqrt(25)); // output: 5 (square root of 25)
console.log(Math.cbrt(27)); // output: 3 (cube root of 27)

console.log(Math.trunc(4.9)); // output: 4 (removes the decimal part)

console.log(Math.pow(3, 3)); // output: 27 (3 raised to the power of 3)
console.log(Math.max(10, 20, 5)); // output: 20 (maximum value)
console.log(Math.min(10, 20, 5)); // output: 5 (minimum value)

console.log(Math.random()); // output: random number between 0 and 1 but not 1

console.log(Math.sin(Math.PI / 2)); // output: 1 (sine of 90 degrees)
console.log(Math.cos(0)); // output: 1 (cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // output: 1 (tangent of 45 degrees)            
console.log(Math.log(Math.E)); // output: 1 (natural logarithm of e)
console.log(Math.exp(2)); // output: 7.3890560989306495 (e raised to the power of 2)



 

//Real world example:
// dice roll game
let value = Math.floor(Math.random()*6)
console.log(value+1)
console.log(Math.floor(Math.random() * 6) + 1); // output: random integer between 1 and 6 (simulating a dice roll)
 
//BILL
let price = 499.75;
let finalPrice = Math.round(price);
console.log(`Final Price: $${finalPrice}`);//output: 500







             


