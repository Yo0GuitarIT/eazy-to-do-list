function AddInputField({ inputValue, handleInputChange, handleAddTodoTask }) {
    return (
        <section>
            <h2>Add a new task</h2>
            <input 
                type="text" 
                value={inputValue} 
                placeholder="Write something to do..." 
                onChange={handleInputChange} />
            <button onClick={handleAddTodoTask}>Add</button>
        </section>
    );
}

export default AddInputField;
