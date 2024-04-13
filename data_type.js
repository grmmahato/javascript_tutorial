// Data Type in JS
// (This is Primitive Data types)
// Number, String, Boolean, Underfined, Null, BigInt, Symbol

// ***********************************************************
let a = 25; // number
let price = 100.2
let fullName = "sidharth singh " // string

isFollow = true   // boolean

let x;  // underfined
let y = null; // null

let b = BigInt("1234"); //  BigInt

let c = Symbol("hello!"); // Symbol





















//**************************************************** */
// Non-primitive Data Types 

const student ={
      fullName: "Sid",
      age: 24,
      cgpa: 8.5,
      isPass: true
};

console.log(student);
console.log(student.age);


// QN(1) => Create a const object called "product" to store information shown in the picture.

const product = {
      title: "ballen pen",
      ratting: 4,
      isDeal: true,
      price: 400.00,
      offer: 5,
};

console.log(product);
console.log(product.offer);
console.log(product["title"]);