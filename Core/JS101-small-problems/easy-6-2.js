function doubleConsonants(string) {
  let vowels = 'aeiou';
  return string.split('').map(char => !vowels.includes(char) ? char + char : char).join('');
}

console.log(doubleConsonants('string'));