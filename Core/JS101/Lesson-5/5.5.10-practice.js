/*
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered
-- alphabetically or numerically as appropriate -- in ascending order.

*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

newArr = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if(typeof a === 'number') {
      return b - a;
    } else {
      if (a < b) {
        return 1
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
});

console.table(newArr);

