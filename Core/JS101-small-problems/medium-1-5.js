function wordToDigit(str) {
  const numbers = {zero:'0',one:'1',two:'2',three:'3',four:'4',five:'5',six:'6',seven:'7',eight:'8',nine:'9'};

  let wordsArray = str.split(' ');

  let newArray = wordsArray.map(word => {
    if (Object.keys(numbers).includes(word)) {
      return numbers[word];
    } else {
      return word;
    }
  });
  return newArray.join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));