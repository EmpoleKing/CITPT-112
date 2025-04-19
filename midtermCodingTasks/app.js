// Coding Task 2

// Initialize fruits array
let fruits = ["Apple", "Banana", "Orange"];

// 1. Add "Mango" to the end of the fruits array
fruits.push("Mango");

// 2. Remove the first fruit from the array
fruits.shift();

// 3. Replace "Banana" with "Strawberry"
fruits[0] = "Strawberry";

// 4. Log the result to the console
console.log(fruits);

// Coding Task 3

// Prompt user age
let age = prompt("Enter your age: ");

// Define messages for less input duplication
let teenagerMessage = "You are a teenager.";
let childMessage = "You are a child.";
let adultMessage = "You are an adult.";
let invalidMessage = "Invalid age. Please enter a whole number.";

// Use if else if statements to check age "group"
// Alert calls added for easier testing
if (age < 18 && age >= 12) {
    console.log(teenagerMessage);
    alert(teenagerMessage);
}
else if (age < 12) {
    console.log(childMessage);
    alert(childMessage);
}
else if (age >= 18) {
    console.log(adultMessage);
    alert(adultMessage);
}
else {
    console.log(invalidMessage)
    alert(invalidMessage);
}

// Coding Task 4

// Define calculateSum
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Call function with two different sets of numbers
let result1 = calculateSum(3, 5);

let result2 = calculateSum(10, 20);

// Log the results to the console
console.log(result1);
console.log(result2);