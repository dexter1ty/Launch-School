function multiplyAllPairs(arr1,arr2) {
  let newArr = [];
  arr1.forEach(int => {
    arr2.forEach(int2 => {
      newArr.push(int * int2);
    });
  });
  return newArr.sort((a,b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));