function joinOr(array,delim = ',',finalWord = 'or') {
  let string = '';
  for (let i = 0; i < array.length; i += 1) {
    if(i === array.length - 1){
      string += ` ${finalWord} ${array[i]}`
      break;
    } else if (i === 0) {
      string += `${array[i]}`;
    } else {
    string += `${delim} ${array[i]}`;
    }
  }
  return string;
}

console.log(joinOr([1,2,3,4,5],',','and'));