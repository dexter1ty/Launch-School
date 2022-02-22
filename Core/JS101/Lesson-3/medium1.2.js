let munstersDescription = "The Munsters are creepy and spooky.";


let letters = munstersDescription.split('');
let swapped = '';

letters.forEach(letter => {
  if(letter.toUpperCase() === letter) {
    swapped = swapped + letter.toLowerCase();
  } else {
    swapped = swapped + letter.toUpperCase();
  }
});

console.log(swapped);
