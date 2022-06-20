// import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./pages/todoapp";
import Counter from "./pages/counter";

function App() {
  return (
    <div className="App">
      <header className="App-head">
        <TodoApp />
        <Counter />
      </header>
    </div>
  );
}

export default App;
