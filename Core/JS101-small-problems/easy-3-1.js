function crunch(str) {
  let array = str.split('');
  let crunched = [array[0]];

  for (let i = 0 ; i < array.length - 1 ; i += 1) {
    if(crunched[crunched.length - 1] === array[i + 1]) {
      continue;
    } else {
      crunched.push(array[i + 1])
    }
  }

  return crunched.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));