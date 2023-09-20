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
    </div>
  );
}
