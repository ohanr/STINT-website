import logo from './logo.svg';
import HomePage from './components/pages/home';
import JobBoard from './components/pages/job_board';
import Testimonials from './components/pages/testimonials';
import './App.css';
import Navbar from './components/NavBar/navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/job-board' element={<JobBoard/>} />
      <Route path='/testimonials' element={<Testimonials/>} />
      </Routes>
      </div>
  </Router>
  );
}

export default App;
