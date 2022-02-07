/*

Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

*/

function oddList(limit) {
  for (let i = 1 ; i <= limit ; i += 1) {
    if(i % 2 === 1) {
      console.log(i);
    }
  }
}

