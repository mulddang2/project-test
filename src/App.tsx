import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <nav>
        <div className="menu">
          <Link to="/" id="nav">Home</Link>
          <Link to="/create" id="nav">Create</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
