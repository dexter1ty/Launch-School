function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
  let second = Math.floor(Math.random() * (first + 1)); // random index from 0 to i
  [array[first], array[second]] = [array[second], array[first]]; // swap elements
  console.log(`first: ${array[first]} => second: ${array[second]}`)
  }
return array;
}

console.log(shuffle([1,2,3,4]));