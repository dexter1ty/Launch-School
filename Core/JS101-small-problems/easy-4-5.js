function isPalindrome(str) {
  let chars = str.split('');
  return str === chars.reverse().join('');
};

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(num) {
  return num >= '0' && num <= '9';
}

function cleanString(str) {
  str = str.toLowerCase();
  let cleanedString = '';
  for (let i = 0; i < str.length; i += 1) {
    if(isLetter(str[i]) || isNumber(str[i])) {
      cleanedString += str[i];
    }
  }
  return cleanedString;
}

function isRealPalindrome(str) {
  return isPalindrome(cleanString(str));
}

console.log(isRealPalindrome("Madam, I'm Adam"));