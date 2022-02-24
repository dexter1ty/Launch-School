function multiLineslogInBox(str,width) {

  if (typeof width === 'undefined') {
    width = str.length;
  }
  
  let linesNb = Math.ceil(str.length / width);
  let lines = []; 
  let boxWidth;
  
  if(linesNb > 1){ 
    boxWidth = width;
  } else {
    boxWidth = str.length;
  }

  for (let i = 0 ; i < linesNb ; i += 1) {
    lines[i] = str.slice(i * width, width * (i + 1));
  }

  console.log(`+${'-'.repeat(boxWidth + 2)}+`);
  console.log(`|${' '.repeat(boxWidth + 2)}|`);

  for (let i = 0 ; i < lines.length ; i += 1) {
    if(i === lines.length - 1) {
      console.log(`| ${lines[i]}${' '.repeat(width - lines[i].length)} |`);
    } else {
      console.log(`| ${lines[i]} |`);
    }
  }

  console.log(`|${' '.repeat(boxWidth + 2)}|`);
  console.log(`+${'-'.repeat(boxWidth + 2)}+`);
  
}

multiLineslogInBox('12345678',5);

