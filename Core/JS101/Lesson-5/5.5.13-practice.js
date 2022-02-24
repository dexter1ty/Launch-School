let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a,b) => {
  let sumA = 0;
  let sumB = 0;
  a.forEach(int => {
    if (int % 2 === 1) {
      sumA += int;
    }
  })
  b.forEach(int => {
    if (int % 2 === 1) {
      sumB += int;
    }
  })
  return sumA - sumB;
});

console.table(arr);