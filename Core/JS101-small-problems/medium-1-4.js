

function minilang(str) {
  
  let instructions = str.split(' ');
  let register = 0;
  let stack = [];
  
  for (let idx = 0; idx < instructions.length; ++idx) {
    if (Number.isInteger(Number.parseInt(instructions[idx]))) {
      register = parseInt(instructions[idx]);
      continue;
    }

    switch(instructions[idx]) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;        
    }
  }
}


minilang('6 PUSH');