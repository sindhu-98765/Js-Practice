                     // Short Circuiting
                // in a if condition only there is one statement to be executed we can use short circuiting

// Instead of writing like this 

//   let isLoggedIn = true;
//   if(isLoggedIn === true){
//       console.log("user is logged in");
//   }


// We can write like this:
// For the above code we can use short circuiting
// If the left side is true then only the right side will be executed

let isLoggedIn = true;
isLoggedIn && console.log("user is logged in");
// Here if isLoggedIn is true then only the right side statement will be executed

// Similarly we can use for false case also
let isLoggedOut = false;
isLoggedOut || console.log("user is logged out");
// Here if isLoggedOut is false then only the right side statement will be executed
// This is called short circuiting
