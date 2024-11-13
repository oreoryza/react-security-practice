<<<<<<< HEAD
import React from 'react';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Footer />
    </div>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/" element={<Contact />} /> */}
        </Routes>
      
    </Router>
>>>>>>> dev-oryza
  );
};

export default App;
