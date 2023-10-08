// create a function to get a word from the random word api
export const getWord = async () => {
  try {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    return data[0];
  } catch (error) {
    return error;
  }
};
