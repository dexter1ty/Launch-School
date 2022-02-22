function runningTotal(arr) {
  let total = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(arr[i] + total);
    total += arr[i];
  }
  return newArr;
}

console.log(runningTotal([14, 11, 7, 15, 20]))
