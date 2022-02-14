const READLINE = require('readline-sync');
const CHOICES = {
  r: "rock",
  p: "paper",
  s: "scissors",
  l: "lizard",
  sp: "Spock"
};

let playerWins = 0;
let computerWins = 0;

function prompt(str) {
  console.log(`==> ${str}`);
}

function validInput(choice) {
  return Object.keys(CHOICES).includes(choice.toLowerCase());
}

function getWinner (userChoice,computerChoice) {
  if (
      (computerChoice === "r" && (userChoice === "p" || userChoice === "sp")) ||
      (computerChoice === "p" && (userChoice === "s" || userChoice === "l")) ||
      (computerChoice === "s" && (userChoice === "r" || userChoice === "sp")) ||
      (computerChoice === "l" && (userChoice === "s" || userChoice === "r")) ||
      (computerChoice === "sp" && (userChoice === "p" || userChoice === "l"))
     ) {
    return "You win!";
  } else if (userChoice === computerChoice) {
    return "It's a tie!";
  } else {
    return "Computer wins!";
  }
}

prompt("Welcome to Rock Paper Scissors Lizard Spock game! the first one who reaches 3 points wins!");

while (true) {
  while (true) {

    if (playerWins === 3) {
      prompt(`You won the match!`);
      playerWins = 0;
      computerWins = 0;
      break;
    } else if (computerWins === 3) {
      prompt(`You lost the match!`);
      playerWins = 0;
      computerWins = 0;
      break;
    }
    
    prompt("Please make a choice! Rock(r), Paper(p), Scissors(s), Lizard(l) or Spock(sp)?");
    let userChoice = READLINE.question();

    while (!validInput(userChoice)) {
      prompt("Please make a correct choice ! Rock(r), Paper(p), Scissors(s), Lizard(l) or Spock(sp)?");
      userChoice = READLINE.question();
    }

    let randomIndex = Math.floor(Math.random() * Object.keys(CHOICES).length);
    let computerChoice = Object.keys(CHOICES)[randomIndex];

    prompt(`You chose ${CHOICES[userChoice]}, computer chose ${CHOICES[computerChoice]}`);
    
    let winner = getWinner(userChoice,computerChoice);

    if (winner === "You win!") {
      playerWins += 1;
    } else {
      computerWins += 1;
    }

    prompt(winner);

    prompt(`Score: player: ${playerWins} | computer: ${computerWins}`);
  }
  
  prompt("Would you like to play again? (y/n)");

  if (READLINE.question() !== "y") {
    break;
  }
}