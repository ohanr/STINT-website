import logo from './logo.svg';
import HomePage from './components/pages/home';
import './App.css';
import Navbar from './components/NavBar/navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>} />
      </Routes>
      </div>
  </Router>
  );
}

export default App;
