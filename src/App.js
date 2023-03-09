import React from "react";
import "./App.css";

import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <div className="container">
        <ListEmployeeComponent />
      </div>
    </div>
  );
}

export default App;
