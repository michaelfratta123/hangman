import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Help from "./components/Help";
import Input from "./components/Input";
import Restart from "./components/Restart";
import Status from "./components/Status";
import { getWord } from "./js/getWord";
import { checkGuess } from "./js/checkGuess";
import "./App.css";
import "./css/custom.css";

function App() {
  // initialise state for random word fetched from api
  const [word, setWord] = useState("");
  // initialise state for array of guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);
  // initialise state for array of correctly guessed letters
  const [correctLetters, setCorrectLetters] = useState([]);
  // initialise state for the state number of the hangman drawing
  const [stateNumber, setStateNumber] = useState(1);
  // initialise state for whether game is won or not
  const [isWon, setIsWon] = useState(false);
  /* declare a function that uses getWord() to get the random word from the api
     and, if found, set it to the 'word' state */
  const fetchWord = async () => {
    try {
      const word = await getWord();
      setWord(word);
    } catch (error) {
      console.error(`Error getting word: ${error}`);
      alert("Sorry, we were unable to get a word. Please try again later.");
    }
  };
  /* use fetchWord as soon as App has rendered to the screen (once -
     due to empty array as second argument */
  useEffect(() => {
    fetchWord();
  }, []);
  // declare a function to handle the user input
  const handleInput = (e) => {
    e.preventDefault(); // prevent page refresh on submit
    const letter = e.target[0].value.toLowerCase(); // get input
    // only add letter if input is not blank
    if (letter) {
      /* use checkGuess function to get array of guessed letters + 
         check if newly letter is correct */
      const { newGuessedLetters, isCorrect } = checkGuess(
        word,
        guessedLetters,
        letter
      );
      // set guessed letters array to state
      setGuessedLetters(newGuessedLetters);
      // use isCorrect from checkGuess object
      if (isCorrect) {
        // if guess is correct, add letter to correct letters array
        setCorrectLetters([...correctLetters, letter]);
      } else {
        // if guess is incorrect, increase the state number by one (for hangman)
        setStateNumber(stateNumber + 1);
      }
    }
    e.target[0].value = ""; // reset input
  };

  /* every time a letter is added to correctLetters, check to see
     if the player has won the game. 'word' needs including in 
     the dependency array only because it is being used in the
     function, but we don't need to track its state specifically. */
  useEffect(() => {
    // Check if all letters have been guessed
    const allLettersCorrect = word
      .split("")
      .every((letter) => correctLetters.includes(letter));
    // if all letters are correct
    if (allLettersCorrect) {
      setIsWon(true); // set won to true
    } else {
      setIsWon(false); // else set won to false
    }
  }, [correctLetters, word]);

  // declare a function to handle the restart button clicked
  const handleRestart = () => {
    // reset all states essentially
    setWord(""); // reset word
    setGuessedLetters([]); // reset guessed letters
    setCorrectLetters([]); // reset correct letters
    setStateNumber(1); // reset state number
    setIsWon(false); // reset won to false
    fetchWord(); // get a new word
  };

  // declare a function to handle help button clicked
  const handleHelp = () => {
    // inform user via alert of game rules
    alert(
      `RULES OF THE GAME:

    Input a single letter and press "Go".

    If you guessed correctly - the letter/s will show in place of the underscores.

    If you guessed incorrectly - an extra line will be drawn.

    You have 10 wrong guesses, before the picture is fully drawn (and you lose).

    Restart the game at any time - this will clear all letters and get a new word.

    The refresh button will achieve the same.

    You can show the word if you're stuck.

  GOOD LUCK!`
    );
  };

  // finally, render all the components
  return (
    <div className="App">
      <h1>Hangman Game</h1>
      {/* if a word has been returned from the api, then render
      the Board component. Otherwise, just say "Fetching word..." */}
      {word ? (
        <Board
          word={word}
          guessedLetters={guessedLetters}
          correctLetters={correctLetters}
          stateNumber={stateNumber}
        />
      ) : (
        <div>Fetching word...</div>
      )}
      {/* some logic for changing the Status props - 
          to inform the user of the current game status */}
      <Status
        status={
          stateNumber === 11
            ? "You lost! Restart Game?"
            : isWon
            ? "You Won! Restart Game?"
            : "Game In Progress..."
        }
      />
      {/* include hangman image. the src changes dynamically 
          based on the stateNumber state (as does the alt) */}
      <img
        className="m-3"
        src={`/state${stateNumber}.gif`}
        alt={`Hangman state ${stateNumber} of 11`}
      />
      {/* only render the input if the game is still in progress */}
      {stateNumber !== 11 && !isWon && <Input handleInput={handleInput} />}
      {/* render the Restart button component */}
      <Restart handleRestart={handleRestart} />
      {/* render the Help button component */}
      <Help handleHelp={handleHelp} />
    </div>
  );
}

export default App;
