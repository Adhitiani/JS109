// //How big is the room?

// //Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// //Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:

// // Copy Code
// // Enter the length of the room in meters:
// // 10
// // Enter the width of the room in meters:
// // 7
// // The area of the room is 70.00 square meters (753.47 square feet).

const readline = require('readline-sync');
console.log('Enter the length of the room in meters:');
let length = readline.question();
length = parseInt(length);


console.log('Enter the width of the room in meters:');
let width = readline.question();
length = parseInt(length);

const METER_TO_FEET = 10.7639;

let areaMeter = length * width;

let areaFeet = areaMeter * METER_TO_FEET;

console.log(`The area of the room is ${areaMeter.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`)
