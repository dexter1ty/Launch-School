/*

Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

*/

let randomAge = Math.floor(Math.random() * (120 - 20 + 1) + 20);
console.log(randomAge);