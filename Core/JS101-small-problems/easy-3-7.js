
function twice(integer) {
  string = String(integer);

  if (string.length % 2 === 1) {
    return integer * 2;
  } 

  return string.slice(0,string.length / 2) === string.slice(string.length / 2) ? integer : integer * 2;

}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
