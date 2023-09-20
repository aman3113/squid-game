import React, { useState, useEffect } from "react";

const resultCriteria = {
  Easy: 10,
  Medium: 15,
  Hard: 25
};

function GreenLightRedLight({ name, difficulty }) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Click button to Start");
  const [timer, setTimer] = useState(0);
  const [colorChangeTimer, setColorChangeTimer] = useState(null);
  const [gameTimer, setGameTimer] = useState(null);

  const TargetScore = resultCriteria[difficulty];

  useEffect(() => {
    if (gameStarted) {
      startGame();
    } else {
      clearInterval(colorChangeTimer);
      clearInterval(gameTimer);
    }

    return () => {
      clearInterval(colorChangeTimer);
      clearInterval(gameTimer);
    };
  }, [gameStarted]);

  function startGame() {
    const minDelay = 1000; // 1 second
    const maxDelay = 2000; // 2 seconds
    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;

    setColorChangeTimer(
      setInterval(() => {
        setMessage((prevMessage) => (prevMessage === "Red" ? "Green" : "Red"));
      }, randomDelay)
    );

    setGameTimer(
      setInterval(() => {
        setTimer((prev) => ++prev);
      }, 1000)
    );
  }

  useEffect(() => {
    if (timer >= 40) {
      endGame();
    }
  }, [timer]);

  function endGame() {
    clearInterval(colorChangeTimer);
    clearInterval(gameTimer);
    setGameOver(true);
    setGameStarted(false);
    setMessage("Game Over!");
  }

  function handleClick() {
    if (!gameOver) {
      if (message === "Green") {
        setScore(score + 1);
        setMessage("Red");
      } else {
        endGame();
      }
    }
  }

  function restartGame() {
    setScore(0);
    setGameOver(false);
    setMessage("Click on the button to Start");
    setTimer(0); // Reset timer to 0
  }

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h2>Difficulty: {difficulty}</h2>
      <h3>Score: {score}</h3>
      <h3>Time: {timer} seconds</h3>
      <div
        className={`box ${message === "Green" ? "green" : "red"}`}
        onClick={handleClick}
      >
        {message}
      </div>

      {gameOver ? (
        <div>
          {score < TargetScore ? (
            <p className="fail">
              You need atleast {TargetScore - score} more points to win this
              game.
            </p>
          ) : (
            <p className="pass">Congrats🥳! You won the Game.</p>
          )}
          <p>Your Score: {score}</p>
          <p>Your Time: {timer} seconds</p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <button onClick={gameStarted ? endGame : startGame}>
          {gameStarted ? "Stop Game" : "Start Game"}
        </button>
      )}
    </div>
  );
}

export default GreenLightRedLight;
