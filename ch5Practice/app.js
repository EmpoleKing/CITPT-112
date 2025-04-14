// Practice Exercise 5.1
{
    const maxValue = 5;

    let solution = Math.floor(Math.random() * maxValue) + 1;
    console.log(`Solution: ${solution}`);

    let isCorrect = false;

    while (!isCorrect)
    {
        let userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`), 10);

        switch (userGuess)
        {
            case userGuess === solution:
                isCorrect = true;
                alert("Congrats! You guessed correctly.");
                break;

            case userGuess > solution:
                alert("Too bad, your guess is too high.");
                break;

            case userGuess < solution:
                alert("Too bad, your guess is too low");
                break;

            default:
                alert(`Error: ${userGuess} is not a valid input. Please enter an integer.`);
                break;
        }
    }
}

// Practice Exercise 5.2

// Practice Exercise 5.3

// Practice Exercise 5.4

// Practice Exercise 5.5

// Practice Exercise 5.6

// Practice Exercise 5.7

// Practice Exercise 5.8