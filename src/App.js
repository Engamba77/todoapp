// import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./pages/todoapp";
import Counter from "./pages/counter";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="/todo" element={<TodoApp />} />
          <Route exact path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
