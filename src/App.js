// import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./pages/todoapp";
import Counter from "./pages/counter";
import FakeProducts from "./pages/products";

function App() {
  return (
    <div className="App">
      <header className="App-head">
        <TodoApp />
        <Counter />
        <FakeProducts />
      </header>
    </div>
  );
}

export default App;
