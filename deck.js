// Card class
class Card {
    constructor(suit, rank) {
      this.suit = suit;  // Initialize the suit property of the Card object
      this.rank = rank; // Initialize the rank property of the Card objectgi
    }
  
    // Compare two cards and determine the higher one
    compare(card) {
      if (this.rank === card.rank) {
        return 0; // return 0 if Tie
      } else if (this.rank > card.rank) {
        return 1; // return 1 if Current card is higher
      } else {
        return -1; //return -1 if ther card is higher
      }
    }
  }
  
  // Deck class
  class Deck {
    constructor() {
      this.cards = [];
    }
  
    // Create and populate the deck with 52 cards
    createDeck() {
      const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
      const ranks = [
        "Ace",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
      ];
  
       // Create a new Card object for each combination of suit and rank and add it to the deck
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[i]];
      } // Swap the current card with a randomly selected card
    }
    
  
    // Deal cards to players
    dealCards(player1, player2) {
      while (this.cards.length > 0) {
        player1.addCard(this.cards.pop());
        player2.addCard(this.cards.pop());
      }
    }
  }
  
  // Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.cards = [];
      this.score = 0;
    }
  
    // Play a card by removing and returning the top card from the player's hand
    playCard() {
      return this.cards.pop();
    }
  
    // Add points to the player's score
    addPoints(points) {
      this.score += points;
    }
  
    // Add a card to the player's hand
    addCard(card) {
      this.cards.unshift(card); // Unshift to add at the beginning (top) of the hand
    }
  }
  //module.exports = Player; so I have this here because before I opened through liveserver the only way I could test was mocha test.js  
  
  
  // Game logic
  const deck = new Deck();
  const player1 = new Player("Player 1");
  const player2 = new Player("Player 2");
  
  deck.createDeck();
  deck.shuffle();
  deck.dealCards(player1, player2);
  

  while (player1.cards.length > 0 && player2.cards.length > 0) {
    const card1 = player1.playCard();
    const card2 = player2.playCard();
  
    const comparison = card1.compare(card2);
    if (comparison === 1) {
      player1.addPoints(1); // Player 1 wins, add 1 point to their score
    } else if (comparison === -1) {
      player2.addPoints(1); // Player 2 wins, add 1 point to their score
    }
  }
  
  // Display the final scores
  console.log(`Player 1 Score: ${player1.score}`);
  console.log(`Player 2 Score: ${player2.score}`);
  
  //declare winner or tie
  if (player1.score > player2.score) {
    console.log("Player 1 wins!");
  } else if (player1.score < player2.score) {
    console.log("Player 2 wins!");
  } else {
    console.log("It's a tie!");
}
  
  
  

  
  
  
  
  
  
  
  
  