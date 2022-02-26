function rotateRightmostDigits(number,digits) {
  let numbersStr = String(number).split('');
  numbersStr.push(numbersStr[numbersStr.length - digits]);
  numbersStr.splice(numbersStr.length - digits - 1,1);
  return Number(numbersStr.join(''));
}

console.log(rotateRightmostDigits(735291, 6));