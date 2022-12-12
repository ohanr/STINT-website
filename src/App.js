import HomePage from './components/pages/home';
import JobBoard from './components/pages/job_board';
import JobDescription from './components/pages/job_description';
import Testimonials from './components/pages/testimonials';
import Companies from './components/pages/companies';
import AboutUs from './components/pages/about';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import "primereact/resources/themes/tailwind-light/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/job-board' element={<JobBoard/>} />
        <Route path='/job-description' element={<JobDescription/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/companies' element={<Companies/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        </Routes>
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></script>
      </div>
  </Router>
  );
}

export default App;
