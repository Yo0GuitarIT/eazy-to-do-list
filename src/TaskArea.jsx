function TaskArea({ tasks, handleToggleComplete, handleDeleteOnClick }) {
    return (
        <section>
            <h2>Tasks</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={handleToggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
                        <button onClick={handleDeleteOnClick(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskArea;
