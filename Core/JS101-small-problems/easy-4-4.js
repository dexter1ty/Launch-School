function isPalindrome(str) {
  let chars = str.split('');
  return str === chars.reverse().join('');
};

