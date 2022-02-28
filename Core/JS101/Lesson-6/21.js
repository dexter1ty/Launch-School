let readline = require('readline-sync');

const suits = ['Heart', 'Diamond', 'Club', 'Spade'];
const values = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

let playerCards = [];
let dealerCards = [];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function initDeckandShuffle() {
  let card = [];
  let deck = [];
  suits.forEach(suit => {
    values.forEach(value => {
      deck.push([suit,value]);
    });
  });
  return shuffle(deck);  
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function dealCard(mainDeck,playerDeck) {
  let randomKey = Math.floor(Math.random() * Object.keys(mainDeck).length + 1);
  playerDeck.push(mainDeck.pop());
}

function displayCards(cards,player='player') {
  let string = '';
  
  if (player === 'dealer') {
    string = 'Dealer has: ';
    } else {
    string = 'You have: ';
    }

  for (let i = 0; i < cards.length; i += 1) {
    if(i === cards.length - 1) {
      if(player === 'dealer') {
      string += ` and a hidden card`
      } else {
      string += ` and ${cards[i][1]}. Total: ${calculateScore(playerCards)}`;
      }
    } else if (i === 0){
      string += `${cards[i][1]}`
    } else {
      string += `, ${cards[i][1]}`
    }
  }
  prompt(string);
}

function calculateScore(cards) {
  let sum = 0;
  let notAces = cards.filter(card => card[1] !== 'Ace');

  notAces.forEach((value) => {
    if(value[1] === 'Jack' || value[1] === 'Queen' || value[1] === 'King') {
      sum += 10;
    } else {
      sum += Number(value[1]);
    }
  });
  if(notAces.length === cards.length) {
    return sum;
  }
  let aces = cards.filter(card => card[1] === 'Ace');
  aces.forEach(val => {
    if(sum + 11 <= 21) {
      sum += 11;
    } else {
      sum += 1;
    }
  });
  return sum;
}

function busted(cards) {
  return calculateScore(cards) > 21;
}

function theWinnerIs(playerCards,dealerCards) {
  if(calculateScore(playerCards) > calculateScore(dealerCards)) {
    prompt(`Player wins! (Player: ${calculateScore(playerCards)} Dealer: ${calculateScore(dealerCards)})`);
  } else if (calculateScore(playerCards) < calculateScore(dealerCards)) {
    prompt(`Dealer wins! (Player: ${calculateScore(playerCards)} Dealer: ${calculateScore(dealerCards)})`);
  } else {
    prompt(`It's a tie! (Player: ${calculateScore(playerCards)} Dealer: ${calculateScore(dealerCards)})`);
  }
}

let mainDeck = initDeckandShuffle();

for(let i = 1;i <= 2; ++i) {
  dealCard(mainDeck,playerCards);
  dealCard(mainDeck,dealerCards);
}

prompt("Welcome to 21 game!\n\nCards have been distributed!\n\n")
displayCards(playerCards);
displayCards(dealerCards,'dealer');

while(true) {
  prompt('(S)tay or (H)it?');
  let answer = readline.question();
  if(answer.toLowerCase() === 's'){
    break;
  } else {
    dealCard(mainDeck, playerCards);
    if(busted(playerCards)) {
      prompt(`You lose! (${calculateScore(playerCards)})`);
      break;
    }
  }
  displayCards(playerCards);
  displayCards(dealerCards,'dealer');
}

while (true) {
  if(busted(dealerCards)) {
    prompt(`Player wins! (Dealer busted with a score of ${calculateScore(dealerCards)})`);
    break;
  }
  if(calculateScore(dealerCards) <= 17) {
    dealCard(mainDeck,dealerCards); 
  } else if (calculateScore(dealerCards) > 17 && calculateScore(dealerCards) <= 21) {
    break;
  }
}

if(!busted(dealerCards) && !busted(playerCards)) {
  theWinnerIs(playerCards,dealerCards);
}