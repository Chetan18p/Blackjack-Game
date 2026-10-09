# Blackjack Game

A fun and lightweight browser-based Blackjack game built with HTML, CSS, and JavaScript. This project lets players start a round, draw new cards, manage a virtual balance, and test their luck in a simple casino-style game.

## Live Demo

Open `index.html` in your browser to play locally.

## Features

- Simple Blackjack gameplay
- Random card generation
- Start game and draw new card actions
- Balance tracking with a $10 start bet
- Win condition: hitting 21 gives a payout
- Lose condition: total above 21 ends the round
- Responsive and minimal UI

## How to Play

1. Click `Start Game` to begin a round.
2. The game automatically deals two cards and deducts $10 from your balance.
3. Click `New Card` to draw more cards.
4. If your total exceeds 21, you lose the round.
5. If your total equals 21, you win and receive $100.
6. Continue playing until your balance is depleted.

## Project Structure

```text
Blackjack-Game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Game Logic Overview

The game uses JavaScript to:

- generate random card values,
- calculate the current sum,
- update the message area,
- maintain the player's chip balance,
- determine win/lose/draw states.

## Notes

This project is intentionally simple and beginner-friendly, making it a great example of a small JavaScript game built without frameworks or libraries.

## Author

Created by Chetan.

## License

This project is open for learning and personal use.
