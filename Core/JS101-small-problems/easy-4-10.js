/*

Given a string of words separated by spaces, write a function that swaps
 the first and last letters of every word.

You may assume that every word contains at least one letter, and that the
string will always contain at least one word. You may also assume that
each string contains nothing but words and spaces, and that there are
no leading, trailing, or repeated spaces.

*/

function swap(str) {
  if (str.length === 1) {
    return str;
  }

  let words = str.split(' ');
  let arrayOfWOrds = [];

  words.forEach(word => {
    let swapped = word[word.length - 1] + word.slice(1, -1) + word[0];
    arrayOfWOrds.push(swapped);
  });
  return arrayOfWOrds.join(' ');
}

console.log(swap('ab'));