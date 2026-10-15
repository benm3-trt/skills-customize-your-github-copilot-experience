# 📘 Assignment: Hangman Game

## 🎯 Objective

Create a playable Hangman game in Python that uses strings, loops, and conditionals to track guessed letters, remaining attempts, and the final win or lose outcome.

## 📝 Tasks

### 🛠️ Build the word selection and guessing logic

#### Description
Write a Python program that chooses a secret word from a list, lets the player guess letters, and updates the visible word as correct guesses are made.

#### Requirements
Completed program should:

- randomly choose a word from a predefined list
- display the hidden word as underscores or blanks for unguessed letters
- accept user input for single-letter guesses
- reveal matching letters in the correct positions
- track guessed letters so the player does not repeat entries
- reduce the number of remaining attempts when a letter is wrong

### 🛠️ Add the game loop and end conditions

#### Description
Complete the game flow so the player can continue guessing until they win or run out of lives, and receive clear feedback after each round.

#### Requirements
Completed program should:

- keep prompting the player until the word is fully guessed or attempts reach zero
- show the current progress and remaining attempts after each guess
- print a win message when the word is solved
- print a lose message when the player runs out of attempts
- restart with a new word or exit cleanly after the game ends
