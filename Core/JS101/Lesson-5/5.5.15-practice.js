let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [4, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let test = arr.filter(obj => {
  let concatArr = [];
  Object.values(obj).forEach(array => {
    concatArr = concatArr.concat(array);
  });
  return concatArr.every(num => num % 2 === 0);
});

console.log(test);