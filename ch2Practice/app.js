// Practice 2.1
let str1 = 'Laurence';
let str2 = 'Svekis';
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof(str1));  // This is a string
console.log(typeof(str2));  // This is also string
console.log(typeof(val1));  // This is undefined
console.log(typeof(val2));  // This is an object
console.log(typeof(myNum)); // This is a number

// Practice 2.2
let age = 25;
let myName = 'Grant';
let canCode = true;

console.log("Hello, my name is " + myName + " and I am " + age +
            " years old and I can code Javascript:" + canCode);

// Practice 2.3
// Function for calculating the hypotenuse of a right triangle
function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Get values from the user
let sideA = parseFloat(prompt("Enter the length of side A:"));
let sideB = parseFloat(prompt("Enter the length of side B:"));

// Calculate the hypotenuse
let hypotenuse = calculateHypotenuse(sideA, sideB);

// Display the hypotenuse to the log
console.log("The hypotenuse is: " + hypotenuse);

// Practice 2.4
// Declare variables
let a = 1;
let b = 2;
let c = 3;

// Updates per the instructions
a += b;
a /= c;
c %= b;

// Display results
console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);