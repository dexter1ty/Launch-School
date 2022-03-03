function multiplyList(array1,array2) {
  return array1.map((int,idx) => int * array2[idx]);
}

console.log(multiplyList([1,2,3,4,5],[1,2,3,4,5]));