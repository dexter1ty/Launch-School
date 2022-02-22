let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(obj) {
  let output = {};

  for (key in obj) {
    if(obj[key] === 'Fruit') {
      output[key] = 'fruit';
    }
  }
  return output;
}

console.table(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }