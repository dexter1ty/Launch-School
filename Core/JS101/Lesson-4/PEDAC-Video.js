function createSequence(int) {

  let sequenceLength = 0;

  for (let i = 1 ; i <= int ; i += 1) {
    sequenceLength += i;
  }

  let counter = 0;
  let sequenceArray = [2];

  while (counter <= sequenceLength - 2) {
    sequenceArray.push(sequenceArray[counter] + 2);
    counter += 1;
  }


  console.log(sequenceArray);
}

createSequence(4);