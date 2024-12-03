import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import AddInputField from "./AddInputField";
import TaskArea from "./TaskArea";

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

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="App">
            <Header logo={logo} />
            <main>
                <AddInputField
                    inputValue={inputValue}
                    handleInputChange={handleInputChange}
                    handleAddTodoTask={handleAddTodoTask}
                />
                <TaskArea
                    tasks={tasks}
                    handleToggleComplete={handleToggleComplete}
                    handleDeleteOnClick={handleDeleteOnClick}
                />
            </main>
        </div>
    );
}

export default App;
