                       // Truthy vs Falsy

                 //Falsy Values in JavaScript      
//There are ONLY 7 falsy values in JavaScript:

//    Value   --------   Meaning

//  false	  --         boolean false
//   0	      ------     number zero
//  -0	      -----      negative zero
//  ""	      --------   empty string
//  null      -------    no value
//  undefined --------  not defined
//  NaN	      --------  not a number

// Falsy → behaves like false

// Examples of Falsy values
if (0) console.log("Run");             // doesn't run
 if ("") console.log("Run");           // doesn't run
 if (undefined) console.log("Run");    // doesn't run
 if (null) console.log("Run");        // doesn't run
 if (NaN) console.log("Run");         // doesn't run
if (false) console.log("Run");        // doesn't run
// if (-0) console.log("Run");       // doesn't run  

    console.log(Boolean(0));          // false
    console.log(Boolean(""));         // false
    console.log(Boolean(undefined));  // false
    console.log(Boolean(null));      // false
    console.log(Boolean(NaN));       // false
    console.log(Boolean(false));     // false

                      // Truthy values

// Anything that is NOT falsy is truthy
//Truthy → behaves like true

// Examples:

// Value     	Why

// 1	         non-zero number
// -5	         non-zero number
// "hello"	     non-empty string
// " "     	     space is still a string
// []             empty array
// {}	          empty object
// function(){}	  function
// true	          true


//  Examples of Truthy values
if (1) console.log("Run");        // runs
 if ("hi") console.log("Run");    //  runs
 if (" ") console.log("Run");     //  runs
 if ([]) console.log("Run");      //  runs
 if ({}) console.log("Run");      //  runs

    console.log(Boolean(1));          // true
    console.log(Boolean("Hello"));     // true
    console.log(Boolean([]));        // true
    console.log(Boolean({}));      // true
    console.log(Boolean(function(){})); // true

    console.log(Boolean(true));      // true



// My Insights
Only 7 values are falsy, everything else is truthy
Falsy values are: false, 0, -0, "", null, undefined, NaN.
