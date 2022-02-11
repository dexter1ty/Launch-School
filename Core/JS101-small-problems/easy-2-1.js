/*
Create a function that takes 2 arguments, an array and an object. The array will contain 2
or more elements that, when combined with adjoining spaces, will produce a person's name.
The object will contain two keys, "title" and "occupation", and the appropriate values.
Your function should return a greeting that uses the person's full name, and mentions
the person's title.

============= PEDAC =================

P) 

Input: 1 array with 2 or more elements and 1 object 
Output: number

requirments: 



E)

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

D)

- name array
- title object

A)



*/

function greetings(name,infos) {
  
  return `Hello, ${name.join(' ')}! Nice to have a ${infos['title']} ${infos['occupation']} around.`
}
 
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
