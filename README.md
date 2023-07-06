# PIG-GAME

This is a simple dice game called PIG-GAME, designed for two players. The objective of the game is to accumulate a high score by rolling a dice. However, rolling a 1 will result in the player losing their current score and their turn. The game ends when one of the players reaches a maximum score of 100.

![pig-game-2](https://github.com/ErosKarm/pig-game-ts/assets/48349453/5020548e-4b51-4e02-96fb-72e242dc393a)

## How to Play

1. The game starts with Player 1.
2. Player 1 rolls the dice by clicking the "Roll Dice" button.
3. If the dice roll result is a 1, Player 1 loses their current score and their turn is passed to Player 2.
4. If the dice roll result is anything other than 1, the score is added to Player 1's current score.
5. Player 1 can choose to either hold their score or continue rolling the dice.
   - Holding the score adds the current score to the total score and passes the turn to Player 2.
   - Continuing to roll the dice will keep adding to the current score unless a 1 is rolled or the player decides to hold.
6. Steps 2-5 are repeated for Player 2.
7. The game continues until one of the players reaches a maximum score of 100.
8. The player who reaches the maximum score first wins the game.

## Technologies Used

The PIG-GAME is built using the following technologies:

- React
- TypeScript
- Tailwind CSS

## Installation

To install and run the game locally, follow these steps:

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd pig-game

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your web browser and visit `http://localhost:3000` to play the PIG-GAME.

Feel free to modify the code and experiment with different features or improvement
