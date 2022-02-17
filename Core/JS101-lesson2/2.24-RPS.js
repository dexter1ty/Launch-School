const READLINE = require('readline-sync');
const CHOICES = ["rock","paper","scissors"];

function prompt(str) {
  console.log(`==> ${str}`);
}

function validInput(choice) {
  return CHOICES.includes(choice.toLowerCase());
}

function getWinner (userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    return computerChoice === "paper" ? "Computer wins!" : "You win!";
  } else if (userChoice === "paper") {
    return computerChoice === "scissors" ? "Computer wins!" : "You win!";
  } else {
    return computerChoice === "rock" ? "Computer wins!" : "You win!";
  }
}

prompt("Welcome to Rock Paper Scissors game!");

while (true) {
  prompt("Please make a choice! Rock, Paper or Scissors ?");
  let userChoice = READLINE.question();

  while (!validInput(userChoice)) {
    prompt("Please make a correct choice ! Rock, Paper or Scissors?");
    userChoice = READLINE.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomIndex];

  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);
  prompt(`${getWinner(userChoice,computerChoice)}`);
  prompt("Would you like to play again? (y/n)");

  if (READLINE.question() !== "y") {
    break;
  }
}