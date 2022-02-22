/*
Write a function that takes one argument, a positive integer, and returns a string of alternating
'1's and '0's, always starting with a '1'. The length of the string should match the given integer.

== Explicit requirements
  - Input: positive integer
  - output: string
  - return a string of alternatin 1 and 0 of a integer numbre of characters

== Implicit requirements
  - 


== Data structure:

String

Algo

- set a str variable that will contain the output
- set an iterator variable to 1
- concatenate a 1 to str if iterator is odd
- concatenate a 0 to str if iterator is even
- repeat while iterator <= integer

*/

function stringy(integer) {
  let str = '';  
  for(let i = 1; i <= integer; i += 1) {
    str = i % 2 === 1 ? str += '1' : str += '0';    
  }
  return str;
}

console.log(stringy(5));