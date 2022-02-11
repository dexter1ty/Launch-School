/*
Write a function that determines and returns the UTF-16 string value of a string passed
in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every
character in the string. (You may use String.prototype.charCodeAt() to determine 
the UTF-16 value of a character.)

============= PEDAC =================

P) 

Input: string
Output: number

requirments: 



E)

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

D)

- str variable with the string passed in the function
- sum variable which is the sum of utf16 values

A)

- considering we have a string
- iterate through all letters and add the UTF16 value to the sum variable

*/

function utf16Value(str) {
  
  let sum = 0;

  for (let i = 0 ; i < str.length ; i += 1) {
    sum += str.charCodeAt(i);
  }  

  return sum;
}
 
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811
