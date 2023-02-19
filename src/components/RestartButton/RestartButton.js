import React from "react";

function RestartButton({ handleRestart }) {
  return (
    <button onClick={handleRestart} className="restart-button">
      Restart Game
    </button>
  );
}

export default RestartButton;
