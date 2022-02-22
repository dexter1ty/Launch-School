/*

Write a function that takes a string consisting of zero or more space separated
words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

*/

function wordSizes(str) {
  let count = {};
  let words = str.split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    let cleanedWord = cleanWordSize(words[idx].toLowerCase());
    if (cleanedWord.length === 0) {
      continue;
    }
    if (!count.hasOwnProperty(cleanedWord.length)) {
      count[cleanedWord.length] = 0;
    }
    count[cleanedWord.length] += 1;
  }
  return count;
}

function cleanWordSize(word) {
  let cleanedWord = '';
  for (let idx = 0; idx < word.length; idx += 1) {
    if (isLetter(word[idx])) {
      cleanedWord += word[idx];
    }
  }
  return cleanedWord;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));