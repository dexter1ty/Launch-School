function centerOf(string) {
  let middle = string.length / 2;
  if (string.length % 2 === 1) {
    return string[Math.floor(middle)];
  } else {
    return string.slice(middle - 1,middle + 1);
  }
}

console.log(centerOf('1001'));