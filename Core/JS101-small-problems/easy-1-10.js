/*

Write a function that computes the sum of all numbers between 1 and some other number,
inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20,
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

============= PEDAC =================

P) 

Input: number greater than 1
Output: number

requirments: 



E)

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

D)

- num variable with the number passed in the function
- counter variable which is the sum of 3 and 5 multiples

A)

- considering we have a integer greater than 1
- iterate through all numbers between 1 and the number included
- if the current number i divided by 3 or 5 leaves no remainder, then add the current number to the counter variable

*/

function multisum(num) {
  
  let counter = 0;

  for (let i = 1 ; i <= num ; i += 1) {
    if(i % 3 === 0 || i % 5 === 0) {
      counter += i;
    }    
  }
  console.log(counter);
  return counter;
}
 
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
