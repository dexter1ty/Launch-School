/*
Write a function that calculates and returns the index of the first Fibonacci number
that has the number of digits specified by the argument. (The first Fibonacci number
has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.


== Explicit requirements
  - Input: positive integer
  - output: integer
  - return a string of alternatin 1 and 0 of a integer numbre of characters
  - the index starts with 1

== Implicit requirements
  - 


== Data structure:

- Array with the Fibonacci sequence [1,1,...]

Algo

- set an array that contains the beginning of fibo sequence [1,1]
- set an iterator to 2 (we don't want to start at a 0 index in the array)
- set sum equal to 0

- get the 2 last values of the array 
  - get the value of the array at array length - 1 and array length - 2
- check if current sum length (must be string) equals the argument
- if it's the case, break the loop and return the length of the array + 1
- push the sum of the 2 last integers to the array
*/

function findFibonacciIndexByLength(bigInt) {
  const fibo = [1,1];
  let sum = 0;
  while (true) {
    sum = fibo[fibo.length - 2] + fibo[fibo.length - 1]
    if (`${sum}`.length === bigInt) {
      fibo.push(sum);
      return fibo.length;
    }
    fibo.push(sum);
  }
}

console.log(findFibonacciIndexByLength(10));

