/*

Write a function that takes one integer argument, which may be positive, negative, or zero.
This method returns true if the number's absolute value is odd. You may assume that the
argument is a valid integer value.

*/

function isOdd (num) {
  if(Math.abs(num) % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
