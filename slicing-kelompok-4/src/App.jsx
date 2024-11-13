import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/" element={<Contact />} /> */}
        <Route path="/ourservices" element={<OurServices />} />
      </Routes>
      <Footer />
    </Router>
=======
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Portfolio /> */}
      <Homepage />
    </div>
>>>>>>> dev-sandy
  );
};

export default App;

