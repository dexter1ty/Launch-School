function findDup(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let currentValue = arr[i];

    for (let j = i + 1; j < arr.length; j += 1) {
      if (currentValue === arr[j]) {
        return currentValue;
      }
    }
  }
}

console.log(findDup([1, 5, 3, 1]));