/*

input : array
output: to console

- initialize object
- iterate over array argument
- in each iteration
  - if the object hasn't a property as the current value,
  then set to 1 the key of the current value.
  - else increment key value by one 
log to the console all the key-value pair of the object

*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurences(array) {
  let obj = {};
  array.forEach(value => {
    if(!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
  });
  Object.entries(obj).forEach(nestedArray => {
    console.log(`${nestedArray[0]} => ${nestedArray[1]}`);
  });
}

countOccurences(vehicles);