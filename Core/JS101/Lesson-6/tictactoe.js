const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const winningLines = [
  [1, 2, 3],[4, 5, 6],[7, 8, 9],
  [1, 4, 7],[2, 5, 8],[3, 6, 9],
  [1, 5, 9],[3, 5, 7]
]

let readline = require('readline-sync');

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function getEmptySquares(board) {
  return Object.keys(board).filter(square => board[square] === EMPTY_MARKER);
}

let playerMove = '';

function playerChooseSquare(board) {
  while (true) {
    prompt(`Please choose a square (${joinOr(getEmptySquares(board))})`);
    playerMove = readline.question();
    if(getEmptySquares(board).includes(playerMove)) {
      break;
    } else {
      prompt("That's not a valid choice.");
    } 
  }
  board[playerMove] = HUMAN_MARKER;
}

function computerChooseSquare(board) {
  if (smartMove(board,'offense')) {
    let square = smartMove(board,'offense');
    board[square] = COMPUTER_MARKER;
  } else if (smartMove(board, 'defense')) {
    let square = smartMove(board,'defense');
    board[square] = COMPUTER_MARKER;      
  } else {
    let randomIndex = Math.floor(Math.random() * getEmptySquares(board).length);
    let square = getEmptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;  
  }
}

function smartMove(board,type) {
  
  let checkState = 0;
  let checkEmpty = 0;
  let emptyIndex = 0;
  let target = '';

  if(type === 'defense') {
    target = HUMAN_MARKER;
  } else {
    target = COMPUTER_MARKER;
  }
  
  for (let line = 0; line < winningLines.length; line += 1) {
    for (let square = 0; square < 3; square += 1) {
      if(board[winningLines[line][square]] === target) {
        checkState += 1;
      } else if (board[winningLines[line][square]] === EMPTY_MARKER) {
        checkEmpty += 1;
        emptyIndex = winningLines[line][square];
      }
    }
    if(checkState === 2 && checkEmpty === 1){
      return emptyIndex;
    }
    checkState = 0;
    checkEmpty = 0;
    emptyIndex = 0;
  }
  return null;
}

function isBoardFull(board) {
  return getEmptySquares(board).length === 0;
}

function isWinner(board) {
  return false;
}

function displayBoard(board) {
  console.clear();

  console.log(`     |     |     `);
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log(`     |     |     `);
  console.log(`-----+-----+-----`);
  console.log(`     |     |     `);
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log(`     |     |     `);
}

function initBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = ' ';
  }
  return board;
}

function winnerName(board) {
  for (let line = 0; line < winningLines.length; line += 1) {
    if (
        board[winningLines[line][0]] === HUMAN_MARKER &&
        board[winningLines[line][1]] === HUMAN_MARKER &&
        board[winningLines[line][2]] === HUMAN_MARKER
    ) {
      return 'Player';
      } else if (
        board[winningLines[line][0]] === COMPUTER_MARKER &&
        board[winningLines[line][1]] === COMPUTER_MARKER &&
        board[winningLines[line][2]] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function isWinner(board) {
  return !!winnerName(board);
}

function joinOr(array,delim = ',',finalWord = 'or') {
  let string = '';
  if(array.length === 1) return String(array[0]);
  for (let i = 0; i < array.length; i += 1) {
    if(i === array.length - 1){
      string += ` ${finalWord} ${array[i]}`
      break;
    } else if (array.length === 0) {
      string = '';
    } else if (i === 0) {
      string += array[0];
    } else {
       string += `${delim} ${array[i]}`;
    }
  }
  return string;
}

// let testBoard = {1:' ',2:'O',3:'O',4:'X',5:'X',6:' ',7:' ',8:' ',9:' '};

while (true){

  let board = initBoard();
  while (true) {
    playerChooseSquare(board);
    computerChooseSquare(board);
    displayBoard(board);

    if(isBoardFull(board) || isWinner(board)){
      if(isBoardFull(board) && !isWinner(board)) {
        prompt("It's a tie!");
        break;
      } else {
        prompt(`${winnerName(board)} won!`)
        break;
      }
    }
  }
  prompt('Play again? (y/n)');
  let answer = readline.question().toLocaleLowerCase()[0];
  if(answer !== 'y') break;
}