import React from "react";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../WonBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

  const guessedLettersMap = Object.fromEntries(
    guesses
      .map((guess) => checkGuess(guess, answer))
      .flat()
      .map(({ letter, status }) => [letter, status])
  );

  function handleGuess(guess) {
    if (gameStatus !== "running") return;

    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (
      guess !== answer &&
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED
    ) {
      setGameStatus("lost");
    }
  }

  function restartGame() {
    setGameStatus("running");
    setGuesses([]);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} handleRestart={restartGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={restartGame} />
      )}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} />
      <Keyboard guessedLettersMap={guessedLettersMap} />
    </>
  );
}

export default Game;
