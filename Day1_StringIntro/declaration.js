let firstName = "Shiva";
let lastName = 'Kumar';
let occupation = `Developer`;
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: Shiva Kumar
console.log(occupation); // Output: Developer
console.log(`Hello, my name is ${fullName} and I am a ${occupation}.`);
// Output: Hello, my name is Shiva Kumar and I am a Developer.


// MY INSIGHTS ON STRINGS IN JS:
        // we can use " " or ' ' or ` ` to declare a string in JS.
       //`` => ${}
       //${} --- variable




       // Concatenation of strings

   let firstName1 = "John";
   let lastName1 = "Doe";
   let fullName1 = firstName1 + " " + lastName1;
   console.log(fullName1); // Output: John Doe
    
   // or we can give space after "john " or before " Doe"
    

// concatenation using concat() method
   let fullName2 = firstName1.concat(" ", lastName1);
   console.log(fullName2); // Output: John Doe
   
// NUMBERS

    let a = 5
    let b = "5"
    console.log(a + b); // Output: 55 (string concatenation)
    console.log(a - b); // Output: 0 (subtraction, b is converted to number)
    console.log(a * b); // Output: 25 (multiplication, b is converted to number)
    console.log(a / b); // Output: 1 (division, b is converted to number)
    console.log(a == b); // Output: true (loose equality, type coercion)
    console.log(a === b); // Output: false (strict equality, no type coercion)
    console.log(a + Number(b)); // Output: 10 (explicit conversion of b to number)


   let x = "5"
   let y = 5
    console.log(x + y); // Output: 55 (string concatenation)
    console.log(x+y+y); // Output: 555 (string concatenation)
    console.log("5"+5+5+5+5);// Output: 55555 (string concatenation)

let firstName3 = "Alice";
    let lastName3 = "Smith";
    console.log(`Hello, my name is ${firstName3} ${lastName3}.`);
    // Output: Hello, my name is Alice Smith.   
    console.log('Hello, my name is ' + firstName3 + ' ' + lastName3 + '.');
    // Output: Hello, my name is Alice Smith.
     
    let dob=2003

    console.log(`My age is  ${2026-dob}.`);// Output: My age is 23.

    
