import React from "react";
import { ALPHABET } from "../../constants";

function Keyboard({ guessedLettersMap }) {
  return (
    <div className="keyboard">
      {ALPHABET.map((row, i) => (
        <div className="keyboard-row" key={i}>
          {row.map((letter) => {
            const keyClass = `key ${guessedLettersMap[letter] ?? ""}`;
            return (
              <span key={letter} className={keyClass}>
                {letter}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
