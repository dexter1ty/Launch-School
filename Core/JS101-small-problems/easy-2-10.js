function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    '-':'-',
    '+':'+'
  };

  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let sign = '';


  if (arrayOfDigits[0] === '-' || arrayOfDigits[0] === '+') {
    sign = arrayOfDigits.shift();
  }

  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));

  return sign === '-' ? -value : value;
  

}

console.log(stringToInteger('+20'));
console.log(stringToInteger('+20') === 20);
console.log(stringToInteger('-20') === -20);
