import React, { useState } from "react";
import GreenLightRedLight from "./GreenLightRedLight";
import Form from "./Form";
import "./styles.css";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function App() {
  const [userStatus, setUserStatus] = useState(false);
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  return (
    <div className="App">
      <header> Squid Game</header>
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
      <footer>
        <a href="www.linkedin.com/in/antilaman3113">
          <BsLinkedin size={20} />
        </a>
        <a href="https://github.com/aman3113">
          <BsGithub size={20} />
        </a>
        <a href="https://twitter.com/AntilAman3113">
          <BsTwitter size={20} />
        </a>
      </footer>
    </div>
  );
}

export default App;
