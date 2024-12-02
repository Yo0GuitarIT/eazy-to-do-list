import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>To Do List</h1>
        <main>
          
          <input
            type="text"
            value={inputValue}
            placeholder="Add a new task"
            onChange={(e) => setInputValue(e.target.value)}
          /> 
          <button>Add</button>
        </main>
      </header>
    </div>
  );
}

export default App;
