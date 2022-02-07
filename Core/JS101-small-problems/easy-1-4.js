/*

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/

let userInput = require('readline-sync');

const length = userInput.question("Enter the length of the room in meters:\n");
const width = userInput.question("Enter the width of the room in meters:\n");



