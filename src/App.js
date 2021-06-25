import React from "react";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div id="App">
      <header id="App-header">
        <div id="title">
          <h1>Coronavirus</h1>
        </div>
      </header>
      <div id="space">
        <div>
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
