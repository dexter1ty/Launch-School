let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let test = arr.map(obj => {
  let newObj = {};
  Object.entries(obj).forEach(property => {
    newObj[property[0]] = property[1] + 1;
  });
  return newObj;
})

console.log(test[1]);
console.log(arr[1]);
