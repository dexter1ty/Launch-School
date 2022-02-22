// Create an object that expresses the frequency with which each
// letter occurs in this string:

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

let statement = "The Flintstones Rock"; //{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
let letters = statement.split('');
let obj = {};

letters.forEach(letter => {
  if (isLetter(letter)) {
    obj[letter] = letters.filter(element => element === letter).length;
  }
});

let test = 0;
test = test || !!0;

console.log(test);
