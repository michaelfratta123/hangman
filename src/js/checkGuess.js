// create a checkGuess function to check whether the guess is correct
export const checkGuess = (word, guessedLetters, letter) => {
  /* create a new array with a copy of the guessed letters as the first 
       index, and the letter that was just input as the second index */
  const newGuessedLetters = [...guessedLetters, letter.toLowerCase()];
  /* create a boolean variable calld isCorrect which evaluates to true
     if the word for the game contains the letter that was input by the user */
  const isCorrect = word.includes(letter.toLowerCase());
  /* return an object containing an array of the guessed letters as the first
     index, and isCorrect as the second index */
  return { newGuessedLetters, isCorrect };
};
