import React from "react";

function GuessInput({ gameStatus, handleGuess }) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        pattern="\w{5}"
        title="5 letter word"
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
