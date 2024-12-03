import "./App.css";

function Header({logo}) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>To Do List</h1>
        </header>
    );
}

export default Header;
