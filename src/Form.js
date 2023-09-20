import { useState } from "react";

export default function Form({
  setUserStatus,
  name,
  setName,
  difficulty,
  setDifficulty
}) {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleStartGame = () => {
    // Validate user input here (e.g., check if all fields are filled).
    // If validation passes, set `gameStarted` to true to start the game.
    setUserStatus(true);
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleStartGame}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <label>Difficulty Level:</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          required
        >
          <option defaultValue value="Easy">
            Easy
          </option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button>Start Game</button>
      </form>
      <h2>Game Rules</h2>
      <ol>
        <li>There are three categories for the game easy, medium and hard.</li>
        <li>
          When user starts the game the box will change color between red and
          green on random intervals between 1 to 2 sec.
        </li>
        <li>
          Clicking on green box will increment the score and change box to re.
        </li>
        <li>
          Clicking on red box will finish the game. Otherwise game will be
          finished in 40 sec.
        </li>
        <li>
          User needs 10 points to win easy level, 15 points for medium and 25
          points for hard leve.
        </li>
      </ol>
    </div>
  );
}
