import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Trainers from './pages/Trainers';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="bg-gym-950 min-h-screen text-white font-inter selection:bg-neon-red selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
