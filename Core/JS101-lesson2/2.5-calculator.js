userInput = require('readline-sync');

console.log("Welcome to the Calculator!");

let num1 = userInput.question("Tell me the 1st number\n");
let num2 = userInput.question("Tell me the 2nd number\n");
let operation = userInput.question("What operation would you like to perform?\n1) Add 2) Substract 3) Multiply 4) Divide\n");
let result;

switch (operation) {
  case '1':
    result = Number(num1) + Number(num2);
    break;
  case '2':
    result = Number(num1) - Number(num2);
    break;
  case '3':
    result = Number(num1) * Number(num2);
    break;
  default:
    result = Number(num1) / Number(num2);
    break;
}

console.log(`The result is ${result}`);

