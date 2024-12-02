import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTodoTask = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue("");
  };

  const handleDeleteOnClick = (index) => () => {
    const newTasks = tasks.filter((_task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

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
          <button onClick={handleAddTodoTask}>Add</button>
          <ul>
            {tasks.map((task, index) => (
              <>
                <li key={index}>{task}</li>
                <button onClick={handleDeleteOnClick(index)}>Delete</button>
              </>
            ))}
          </ul>
        </main>
      </header>
    </div>
  );
}

export default App;
