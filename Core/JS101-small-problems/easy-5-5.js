/*

Input: 2 arrays
Output : 1 array

Pseudo code:

- initialize variable newArray
- initialize a variable i as the iterator for the loop
- on each iteration push value of element of index i of the two
arrays to the new array

*/

function interleaves(array1, array2) {
  let newArray = [];
  for (let idx = 0; idx < array1.length; ++idx) {
    newArray.push(array1[idx],array2[idx]);
  }
  return newArray;
}

console.log(interleaves(['a','b','b'],[1,2,3]));