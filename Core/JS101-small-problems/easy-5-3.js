function halvsies(arr) {
  let half = Math.ceil(arr.length / 2);
  return [arr.slice(0,half),arr.slice(half)];
}

console.table(halvsies([1, 5, 2, 4, 3]));