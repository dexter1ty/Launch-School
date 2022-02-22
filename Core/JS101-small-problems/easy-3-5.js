/*
Write a function that takes a positive integer, n, as an argument and logs a right triangle
whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the
  images below) should have one end at the lower-left of the triangle, and the other end
  at the upper-right.


== Explicit requirements
  Input: positive integer
  Output: log

== Implicit requirements
  


== Data structure:
- string


== Algo ==

set integer as argument
set a spaces variable
set a stars variable
set an iterator variable that equals 1
reassign spaces = integer-iterator * spaces string
reassign stars = iterator  * stars string
concatenate spaces and stars
increment iterator
repeat while iterator <= integer

*/

function drawTriangle(int) {
  let spaces = '';
  let stars = '';
  
  for (let i = 1; i <= int; i += 1) {
    spaces = ' '.repeat(int - i);
    stars = '*'.repeat(i);
    console.log(spaces + stars);
  }
}

drawTriangle(3);

