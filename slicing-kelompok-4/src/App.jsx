import React from 'react';
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
  );
};

export default App;

