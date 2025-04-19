// Chapter 2 Project

// Miles to Kilometers Conversion
// Declare variables
let miles = 100;
let kilometers;

// Convert miles to kilometers
kilometers = miles * 1.60934;
console.log("The distance of " + kilometers + " kilometers is equivalent to "
            + miles + " miles.");

// BMI Calculator

// Declare variables
let weight = 150; // in pounds
let height = 70;  // in inches

// Convert to metric
let weightKg = weight * 0.453592; // 1 pound = 0.453592 kilograms
let heightM = height * 0.0254;    // 1 inch = 0.0254 meters

// Calculate and log BMI
let bmi = weightKg / (heightM * heightM);
console.log("Your BMI is: " + bmi);

let result = 5+"5";