function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [];
  }

  let newArr = arr.slice();
  newArr.push(newArr.shift());
  return newArr;

}
let array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);