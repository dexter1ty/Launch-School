function reverseNumber(int) {
  return Number(String(int).split('').reverse().join(''));
}

console.log(reverseNumber(12345000));