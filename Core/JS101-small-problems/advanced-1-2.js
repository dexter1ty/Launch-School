
function generateEmptyArray(arr) {
  let emptyArray = [];
  arr.forEach((subArr,index) => {
    emptyArray.push([]);
    subArr.forEach(element => {
      emptyArray[index].push([]);
    });
  });
  return emptyArray;
}

function transpose(arr) {
  let newArr = generateEmptyArray(arr);
  arr.forEach((subArr, index1) => {
    subArr.forEach((value, index2) => {
      newArr[index2][index1] = value;
    });
  });
  return newArr;
}

let matrix = [
  [1, 5, 8, 4],
  [4, 7, 2, 4],
  [3, 9, 6, 4],
  [3, 9, 6, 4],
];


console.table(transpose(matrix));