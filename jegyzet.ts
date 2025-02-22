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

// ----------------------------------

//Tuples
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

//Named tuples
const graph: [x: number, y: number] = [55.2, 41.3];

//Destructuring Tuples
const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph;

console.log(x); // 55.2
console.log(y); // 41.3

//Object

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };

  const car2: { type: string, mileage?: number } = { // no error , mileage optional (?)
    type: "Toyota"
  };
  car2.mileage = 2000;


//Index Signatures

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // No Error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

//Enum


//Aliases & Interfaces
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car3: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

//Interface
interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };