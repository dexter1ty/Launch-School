/*

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to 
determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

*/

let userInput = require('readline-sync');

let int = userInput.question("Please choose an integer greater than 0\n");
let sumOrPro = userInput.question("Enter \"s\" to compute the sum, or \"p\" to compute the product. \n");

if(sumOrPro === 's') {
  let sum = 0;
  for (let i = 1 ; i <= int ; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}`)
} else {
  let prod = 1;
  for (let i = 1 ; i <= int ; i += 1) {
    prod *= i;
  }
  console.log(`The product of the integers between 1 and ${int} is ${prod}`)
}






