//Explicit type
let firstName : string = "John";
let isKid : boolean = true;
let age : number = 10;

//Implicit type
let lastName = "Donald"

// ----------------------------------

//Any types
/*
let u = true;
u = "string";
*/

let u : any = true;
u = "apple";

//Unknown type 
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}

// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

let example: unknown;
example = 42;
example = "Hello, world!";

// console.log(example.toUpperCase());

if (typeof example === 'string') {
  console.log(example.toUpperCase());
}

// ----------------------------------

//Array
const names: string[] = [];
names.push("Dylan"); // No Error
// names.push(3); // Error

const animals: readonly string[] = ["cat"];
// names.push("dog"); // Error

