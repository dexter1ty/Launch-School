function isPalindromicNumber(int) {
  return String(int) === String(int).split('').reverse().join('');
}

console.log(isPalindromicNumber(00000));