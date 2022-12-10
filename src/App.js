import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import Title from "./component/Title";
import Myname from "./component/Myname";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Front end Developer John" />
      <Title name="Mobile Developer John" />
      <Title name="Solodity  Developer John" />
      <Myname/>
    </div>
  );
}

export default App;
