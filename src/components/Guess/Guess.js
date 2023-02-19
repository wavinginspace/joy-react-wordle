import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer) || [];

  return (
    <p className="guess">
      {range(5).map((num) => {
        const { letter, status } = letters[num] ?? {};
        return <Cell letter={letter} status={status} key={num} />;
      })}
    </p>
  );
}

export default Guess;
