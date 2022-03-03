/*

Input: array of integers
Output : string

Pseudo code:

- multiply all the integers together
- divide by the number of entries in the array
- return as string the result rounded to three decimals 
*/

function multiplicativAverage(array) {
  let result = array.reduce((acc,value) => acc * value);
  return (result / array.length).toFixed(3);
}


