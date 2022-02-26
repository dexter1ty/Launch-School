function leadingSubstrings(str) {
  let arr = [];
  for (let i = 1; i <= str.length; i += 1) {
    arr.push(str.slice(0,i));
  }
  return arr;
}

function allSubstrings(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    arr = arr.concat(leadingSubstrings(str.slice(i)));
  }
  return arr;
}

function palindromes(str) {
  let substrings = allSubstrings(str);
  let palindromes = substrings.filter(substring => {
    if (substring.length > 1) {
      return substring === substring.split('').reverse().join('');
    }
  });
  return palindromes;
}

console.log(palindromes('hello-madam-did-madam-goodbye'));