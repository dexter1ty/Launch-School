const readline = require('readline-sync');

function prompt(text) {
  console.log(`=> ${text}`);
}

function unvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("Welcome to the Calculator!");

prompt("Tell me the 1st number");
let num1 = readline.question();

while (unvalidNumber(num1)) {
  prompt("It's not a valid number. Please enter an integer");
  num1 = readline.question();
}

prompt("Tell me the 2nd number");
let num2 = readline.question();

while (unvalidNumber(num2)) {
  prompt("It's not a valid number. Please enter an integer");
  num2 = readline.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Substract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("You must choose between 1,2,3 or 4");
  operation = readline.question();
}

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