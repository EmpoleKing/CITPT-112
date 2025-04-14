// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Initialize guess, attempts to 0
let guess;
let attempts = 0;

while (true) {
    // Get the guess from user
    guess = prompt("Guess the number! Input an integer between 1 and 100. " +
                   "The possible values are inclusive to these parameters. Type 'quit' to give up.\n Guess:");

    // Check if the user is a quitter
    if (guess.toLowerCase() === "quit") {
        alert("I can't believe you didn't get it. The number was " + randomNumber);
        break;
    }
    else
    {
        // Convert input to a number
        guess = Number(guess);
        attempts++;
    }

    // Check if the user guessed correctly
    if (guess === randomNumber) {
        alert("You got it! The number was " + randomNumber + ". You guessed the correct number in " + attempts + " attempts.");
        break;
    } else if (guess > randomNumber) {
        alert("Too high, try again. Attempts: " + attempts);
    } else if (guess < randomNumber) {
        alert("Too low, try again. Attempts: " + attempts);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
}