const readline = require('readline-sync');
const  MESSAGES = require('./calculator-messages.json');

function prompt(text) {
  console.log(`=> ${text}`);
}

function unvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['num1']);
  let num1 = readline.question();

  while (unvalidNumber(num1)) {
    prompt(MESSAGES['notValidNum']);
    num1 = readline.question();
  }

  prompt(MESSAGES['num2']);
  let num2 = readline.question();

  while (unvalidNumber(num2)) {
    prompt(MESSAGES['notValidNum']);
    num2 = readline.question();
  }

  prompt(MESSAGES['operation']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['notValidChoice']);
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

  console.log(`${MESSAGES['result']} ${result}`);

  prompt(MESSAGES['another']);
  let answer = readline.question();

  if (answer !== "y") {
    prompt(MESSAGES['bye']);
    break;
  }
}