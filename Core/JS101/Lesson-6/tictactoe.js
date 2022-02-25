const EMPTY_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

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
    prompt(`Please choose a square (${getEmptySquares(board).join(', ')})`);
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
  let randomIndex = Math.floor(Math.random() * getEmptySquares(board).length);
  let square = getEmptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function isBoardFull(board) {
  return getEmptySquares(board).length === 0;
}

function isWinner(board) {
  return false;
}

function displayBoard(board) {

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
  let winningLines = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7]
  ]

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
  for (let i = 0; i < array.length; i += 1) {
    if(i === array.length - 1){
      string += ` ${finalWord} ${array[i]}`
      break;
    } else if (i === 0) {
      string += `${array[i]}`;
    } else {
    string += `${delim} ${array[i]}`;
    }
  }
  return string;
}

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