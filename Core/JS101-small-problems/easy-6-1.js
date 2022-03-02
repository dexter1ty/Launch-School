/*

Input: string
Output: string

*/

function repeater(str) {
  return str.split('').map(char => char + char).join('');
}

console.log(repeater('Good job!'));