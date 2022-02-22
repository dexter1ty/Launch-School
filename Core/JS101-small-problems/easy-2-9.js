function stringToInteger(string) {
  const DIGITS = [0,1,2,3,4,5,6,7,8,9];
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger('2'));


function hexaToInt(string) {
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
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char.toLowerCase()]);
  let pow = 0;
  let value = 0;
  
  for (let index = string.length - 1 ; index >= 0 ; index -= 1) {
    value = (arrayOfDigits[index] * 16 ** pow) + value;
    pow += 1;
  }

  return value;
}


console.log(hexaToInt('4d9f'));