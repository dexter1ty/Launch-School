const READLINE = require('readline-sync');

let loanAmount = Number(READLINE.question('What is the Loan amount? '));
let loanDuration = Number(READLINE.question('What is the loan duration in years? ')) * 12;
let yearIntRate = Number(READLINE.question('What is the yearly interest rate? '));
let monthlyInt = (yearIntRate / 100) / 12;

let monthlyPay = loanAmount * (monthlyInt / (1 - Math.pow((1 + monthlyInt), (-loanDuration))));
monthlyPay = monthlyPay.toFixed(2);

console.log(`You'll have to pay $${monthlyPay} every month otherwise mafia will ring the bell!`);