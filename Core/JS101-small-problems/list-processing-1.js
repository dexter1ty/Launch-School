function sum(int) {
  return String(int).split('').reduce((a,b) => a + Number(b),0);
}

console.log(sum(496));