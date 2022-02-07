/*

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip,
and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that
the user will enter numbers.

*/

let userInput = require('readline-sync');

let amount = userInput.question("What is the bill? :\n");
amount = parseInt(amount,10);
let rate = userInput.question("What is the tip percentage?\n");
rate = parseInt(rate,10);
let tip = (amount * rate) / 100;
let total = amount + tip;

console.log(`The tip is ${tip.toFixed(2)}$`);
console.log(`The total is ${total.toFixed(2)}$`);




