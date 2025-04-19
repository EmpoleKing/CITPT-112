// Practice Exercise 3.1

// Create the array
let shoppingList = ["Milk", "Bread", "Apples"];

// Print the length of the list
console.log("Length of shopping list: " + shoppingList.length);

// Update the list
shoppingList[1] = "Bananas";

// Print the list
console.log("Shopping list: " + shoppingList);

// Practice Exercise 3.2

// Create the array
let shoppingListTwo = ["Milk", "Bread", "Apples"];

// Replace Bread
shoppingListTwo.splice(1, 1, "Bananas", "Eggs");

// Create a new list
let newList = ["Juice", "Pop"];

// Add the new list to the existing list twice
shoppingListTwo.push(...newList);
shoppingListTwo.push(...newList);

// Get the index of the final Pop
let index = shoppingListTwo.lastIndexOf("Pop");

// Print the index
console.log("Index of Pop: " + index);

// Print the list
console.log("Shopping list two: " + shoppingListTwo);

// Practice Exercise 3.3

// Create the array of numbers
let numbersArray = [1, 2, 3];

// Nest the numbers array in another array
let nestedArray = [numbersArray, numbersArray, numbersArray];

// Print the nested array
console.log("Nested array: " + nestedArray);

// Output 2 from the second array
console.log("Output: " + nestedArray[1][1]);

// Practice Exercise 3.4

// Create a car object
let newCar = {
    make: "Nissan",
    model: "Rogue",
    year: 2018
};

// Create the myColor property
let myColor = "myColor";

// Add the color property to the car object
newCar[myColor] = "Silver";

// Add the forSale property to the car object
let forSale = "forSale";
newCar[forSale] = false;

// Output the make, model, and forSale properties
console.log("Make: " + newCar.make);
console.log("Model: " + newCar.model);
console.log("For sale: " + newCar.forSale);

// Practice Exercise 3.5

// Create the people object
let people = {
    friends : []
};

// Create three variables for the friends
let friendOne = {
    firstName: "Robert",
    lastName: "Smith",
    id: 1
};

let friendTwo = {
    firstName: "John",
    lastName: "Doe",
    id: 2
};

let friendThree = {
    firstName: "Jane",
    lastName: "Doe",
    id: 3
};

// Add the friends to the people object
people.friends.push(friendOne);
people.friends.push(friendTwo);
people.friends.push(friendThree);

// Output the friends array to the console as a string
console.log("Friends: " + JSON.stringify(people.friends, null, 2));