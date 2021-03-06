let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let test = Object.values(obj).map(subObj => {
  if (subObj['type'] === 'fruit') {
    return subObj['colors'].map(color => {
      return color = `${color[0].toUpperCase()}${color.slice(1)}`;
    });
  } else {
    return subObj['size'].toUpperCase();  
  }     
});

console.log(test);