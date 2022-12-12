import React from "react";
import "./App.css";
import Greet from "./component/Greet";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import Title from "./component/Title";
import Myname from "./component/Myname";
import Mycount from "./component/Mycount";
import Form from "./component/Form";
import Users from "./component/Users";
import Event from "./component/Event";
import Range from "./component/Range";
import Submit from "./component/Submit";
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Front end Developer John" />
      <Title name="Mobile Developer John" />
      <Title name="Solodity  Developer John" />
      <Myname />
      <Mycount />
      <Form />
      <Users />
      <Event />
      <Range />
      <Submit />
    </div>
  );
}

export default App;
