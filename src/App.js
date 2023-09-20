import React, { useState } from "react";
import GreenLightRedLight from "./GreenLightRedLight";
import Form from "./Form";
import "./styles.css";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <div className="App">
      {!userStatus ? (
        <Form
          setUserStatus={setUserStatus}
          name={name}
          setName={setName}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      ) : (
        <GreenLightRedLight name={name} difficulty={difficulty} />
      )}
    </div>
  );
}

export default App;
