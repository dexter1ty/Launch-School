/*

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

*/

let userInput = require('readline-sync');

let feetOrMeters = userInput.question("meters or feet? :\n");

if(feetOrMeters !== 'meters' && feetOrMeters !== 'feet'){ 
  console.log(`Please be sure to write "meters' "or feet" (you wrote ${feetOrMeters})`);
} else {
  let length = userInput.question("Enter the length of the room:\n");
  length = parseInt(length,10);

  let width = userInput.question("Enter the width of the room:\n");
  width = parseInt(width,10);

  let areaMeters = length * width;
  let areaFeet = areaMeters * 10.7639;

  if(feetOrMeters.toLowerCase() === 'meters') {
    console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet).`);
  } else {
    console.log(`The area of the room is ${areaFeet.toFixed(2)} square feet (${areaMeters.toFixed(2)} square meters).`);
  } 
}




