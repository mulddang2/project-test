
import './App.css'
import { Link, Route, Routes } from "react-router-dom"
import Create from './pages/Create'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App
