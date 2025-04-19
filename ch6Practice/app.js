// Practice Exercise 6.1
{
    // Function with two params
    function addIntegers(a, b) {
        // Return the sum of the two integers
        return a + b;
    }

    // Setup the variables

    let num1 = 10;
    let num2 = 15;

    // Call the function and output the result
    console.log(addIntegers(num1, num2));

    // Second set of variables with different values
    num3 = 20;
    num4 = 25;

    // Call the function and output the result
    console.log(addIntegers(num3, num4));
}

// Practice Exercise 6.2
{
    // Initialize array of descriptive words
    let descriptiveWords = ["weird", "fun", "charming", "delightful", "helpful", "quirky", "silly", "thoughtful", "witty", "zany"];

    // Create a function that contains a prompt asking the user for a name
    function describeName() {
        let name = prompt("Please enter your name:");

        // Get a random word through a random index
        let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
        let randomWord = descriptiveWords[randomIndex];

        // Output to the console
        console.log(`${name}, you are ${randomWord}!`);
    }

    // Call the function
    describeName();
}

// Practice Exercise 6.3
{
    // Set up two variables containing number values
    let num1 = 10;
    let num2 = 5;

    // Set up a variable containing operator
    let operator = '+';

    // Function to calculate the sum or difference of two numbers
    function calculate(a, b, oper) {
        // Check the conditions
        if (oper === '-') {
            return a - b;
        } else if (oper === '+') {
            return a + b;
        } else {
            return 'Please enter a valid operator.';
        }
    }

    // Call the function in the logging statement
    console.log(calculate(num1, num2, operator));

    // Update to subtraction, test the second condition
    operator = '-';
    console.log(calculate(num1, num2, operator));
}

// Practice Exercise 6.4
{
    // Initialize an empty array
    let resultsArray = [];

    // Loop through 10 times incrementing by one
    for (let i = 0; i < 10; i++) {
        // Create values based on iteration
        let value1 = i * 5;
        let value2 = i * i;

        // Function to add two values together
        function calculate(a, b) {
            return a + b;
        }

        // Call the function and store the result in a variable
        let response = calculate(value1, value2);

        // Push to the array
        resultsArray.push(response);
    }

    // Log the array
    console.log(resultsArray);
}

// Practice Exercise 6.5
{
    // Initialize value to 1000
    let value = "1000";

    // Initialize IIFE function
    (function() {
        let value = "Local value inside IIFE";
        // Print the local value
        console.log("IIFE local value:", value);
    })();

    // Get the local value
    let result = (function() {
        let value = "Local value inside IIFE expression";
        return value;
    })();

    // Print the results
    console.log("Result variable:", result);
    console.log("Global value:", value);

    // Initialize an anonymous function
    let functionAnon = function(newValue) {
        let value = newValue;
        console.log(`Anonymous function value: ${value}`);
    };

    // Call the function
    functionAnon("Beanie Babies");
}

// Practice Exercise 6.6
{
    // Initialize function to calculate the factorial of a number
    function calcFactorial(n) {
        // Check if the number is 0
        if (n === 0) {
            return 1;
        } else {
            // Print the current value of the argument
            console.log(`Current value: ${n}`);
            return n * calcFactorial(n - 1);
        }
    }

    // Call the function with a number
    let number = 6;
    console.log(`Factorial of ${number}:`, calcFactorial(number));

    // Test out additional numbers
    number = 14;
    console.log(`Factorial of ${number}:`, calcFactorial(number));

    number = 25;
    console.log(`Factorial of ${number}:`, calcFactorial(number));
}

// Practice Exercise 6.7
{
    // Initialize start to 10
    let start = 10;
    let secondStart = 100;

    // Create a countdown function
    function countdown(value) {
        // Output the current value
        console.log(`Countdown: ${value}`);

        // Check if its over
        if (value < 1) {
            return;
        } else {
            return countdown(value - 1);
        }
    }

    // Create a second countdown
    function countdown2(value) {
        // Output the value
        console.log(`Countdown2: ${value}`);

        // If greater than 0, do stuff
        if (value > 0) {
            return countdown2(value - 1);
        }
    }


    // Initiate the countdown
    countdown(start);

    // Initiate the second countdown
    countdown2(secondStart);
}

// Practice Exercise 6.8
{
    // Function with a single param
    let printMessage = function(message) {
        // Output the provided arg
        console.log(`Function expression: ${message}`);
    };

    // Call the function
    printMessage("Dangit Bobby, that boy ain't right!");

    // Do the same thing, except with a normal function declaration
    function printMessageDeclaration(message) {
        // Output the arg
        console.log(`Function declaration: ${message}`);
    }

    // Do a different arg for fun
    printMessageDeclaration("You know what Ford stands for, don't you Hank? Fix it again, Tony!");
}