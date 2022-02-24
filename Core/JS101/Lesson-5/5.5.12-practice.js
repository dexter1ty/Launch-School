let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let test = arr.map(subArr => {
  return subArr.filter(a => a % 3 === 0);
})

console.table(test);