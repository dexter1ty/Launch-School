const readline = require('readline-sync');

function prompt(text) {
  console.log(`=> ${text}`);
}


prompt("Welcome to the Calculator!");

prompt("Tell me the 1st number");
let num1 = readline.question();

prompt("Tell me the 2nd number");
let num2 = readline.question();

let operation = readline.question("What operation would you like to perform?\n1) Add 2) Substract 3) Multiply 4) Divide\n");
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

