import React, { useState } from "react";
import Letter from "./Letter";
import Button from "react-bootstrap/Button";

// initiate a functional component named Board to represent the main game board
const Board = ({ word, guessedLetters }) => {
  // initiate state to false for showWord (controls button)
  const [showWord, setShowWord] = useState(false);

  // initiate an array to contain underscores/display correct guesses
  let displayedWord = word
    .split("")
    .map((letter) => {
      return guessedLetters.includes(letter) ? letter : "_";
    })
    .join(" ");
  // render the component
  return (
    <div>
      {/* use state to control which button is showing,
            then set the state as well depending on which
            button is clicked. */}
      <h2>
        {showWord ? (
          <>
            {word}{" "}
            <Button variant="dark" onClick={() => setShowWord(false)}>
              Hide Word
            </Button>
          </>
        ) : (
          <Button variant="dark" onClick={() => setShowWord(true)}>
            Show Word
          </Button>
        )}
      </h2>
      {/* show grid of guessed letters; utlises Letter component */}
      <h3>Your guesses so far:</h3>
      <div className="row">
        {guessedLetters.map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </div>
      <div>
        {/* render the underscores/correct guesses */}
        <h3>{displayedWord}</h3>
      </div>
    </div>
  );
};

export default Board;
