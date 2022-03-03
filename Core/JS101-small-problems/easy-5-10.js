function average(array) {
  return Math.floor(array.reduce((acc,element) => acc + element) / array.length);
}

console.log(average([10,20]));