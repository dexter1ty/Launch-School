function digitList(number) {
  let list = [];
  String(number).split('').forEach(char => list.push(Number(char)));
  return list;
}

console.log(digitList(12345));