// Chapter 4 Project - Rock Paper Scissors

// Function for the computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function for the player's choice
function playerPlay() {
    let choice = prompt("Enter your choice (rock, paper, scissors, lizard, or spock):");
    return choice.toLowerCase();
}

// Function to determine the victor
function determineWinner(playerSelection, computerSelection) {
    // Check for tie first
    if (playerSelection === computerSelection) {
        return "It's a tie!";

    // Check for player win, could be more efficient or use a switch statement,
    // but this is simpler and more readable for the application in this course
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper' ||
               playerSelection === 'rock' && computerSelection === 'lizard' ||
               playerSelection === 'lizard' && computerSelection === 'spock') {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to play the game
function rockPaperScissorsLizardSpock() {

    // Get user selection and random computer selection
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    // Determine the winner and output the result to the webpage
    alert(determineWinner(playerSelection, computerSelection) + " Player: " + playerSelection + " Computer: " + computerSelection);
}

// Start the game
rockPaperScissorsLizardSpock();