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
    setTasks([...tasks, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleDeleteOnClick = (index) => () => {
    const newTasks = tasks.filter((_task, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => () => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
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
              <li key={index}>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    marginRight: "10px",
                  }}
                >
                  {task.text}
                </span>
                <button onClick={handleToggleComplete(index)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={handleDeleteOnClick(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </main>
      </header>
    </div>
  );
}

export default App;
