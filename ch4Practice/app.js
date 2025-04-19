// Practice Exercise 4.1

// Declare the variable
let myVariable = true;

// Log it to the console
console.log(myVariable);

// Playing around with the variable
for (let i = 0; i < 4; i++) {
    if (myVariable) {
        console.log("The condition is true");
    }

    if (!myVariable) {
        console.log("The condition is false");
    }

    if(i%2 == 0){
        myVariable = false;
    } else {
        myVariable = true;
    }
}

// Practice Exercise 4.2

// Prompt the user for their age
let age = prompt("What is your age?");

// Convert the age to a number
age = Number(age);

let message;

// Check if the user is old enough to drink, and go into a "venue"
if (age >= 21) {
    message = "You are old enough to drink. Enjoy the venue!";
} else if (age >= 19) {
    message = "You are old enough to enter the venue, but not drink.";
} else {
    message = "You need to leave.";
}

// Log the message to the console
console.log(message);

// Alert the message to the user
alert(message);

// Practice Exercise 4.3

// Create a Boolean value for an ID variable
let ID = true;

// Checking the value
let validMessage = ID ? "Your ID is valid. You are allowed into the venue." : "Your ID is not valid. You are not allowed into the venue.";

// Output the response to the console
console.log(validMessage);

// Testing false case
ID = false;

// New message for the false case
let validMessageTwo = ID ? "Your ID is valid. You are allowed into the venue." : "Your ID is not valid. You are not allowed into the venue.";

// Log the new result
console.log(validMessageTwo)

// Practice Exercise 4.4

// Set a variable that gets a random value assigned to it (0-5)
let randomValue = Math.floor(Math.random() * 6);

// Create a prompt to get a string value input from the user
let userQuestion = prompt("Ask a question:");

// Create a variable to hold the end response
let response;

// Use a switch statement to assign different responses based on the random value
switch (randomValue) {
    case 0:
        response = "Yes, definitely!";
        break;
    case 1:
        response = "No, certainly not.";
        break;
    case 2:
        response = "Maybe, who knows?";
        break;
    case 3:
        response = "Ask again later.";
        break;
    case 4:
        response = "It is uncertain.";
        break;
    case 5:
        response = "Absolutely!";
        break;
    default:
        response = "Error: Invalid response.";
        break;
}

// Output the user's original question and the randomly selected case response to the console
console.log("Your question: " + userQuestion);
console.log("Response: " + response);

// Practice Exercise 4.5

// Get the user input
let prize = prompt("Select a number between 0 and 10:");

// Convert the prompt response to a number
prize = Number(prize);

// Create the output message
let outputMessage = "My Selection: ";

// Declare the prize message
let prizeMessage;

// Switch statement for getting the prize message
switch (prize) {
    case 0:
    case 1:
        prizeMessage = "You win nothing! Please leave.";
        break;
    case 2:
    case 3:
        prizeMessage = "You win a mug!";
        break;
    case 4:
    case 5:
        prizeMessage = "You win a t-shirt!";
        break;
    case 6:
    case 7:
        prizeMessage = "You win a pack of sleeves!";
        break;
    case 8:
    case 9:
        prizeMessage = "You win a booster pack!";
        break;
    case 10:
        prizeMessage = "You win a booster box!";
        break;
    default:
        prizeMessage = "Invalid selection. Please select a number between 0 and 10.";
        break;
}

// Output the message through concatenation
outputMessage += prize + " - " + prizeMessage;
console.log(outputMessage);
alert(outputMessage);