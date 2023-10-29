import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';

// Import komponen-komponen halaman
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/styles/style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

function ConditionalFooter() {
  const location = useLocation();

  // Tampilkan footer hanya jika bukan halaman AboutUs atau Contact
  if (location.pathname !== '/AboutUs' && location.pathname !== '/Contact') {
    return <Footer />;
  }

  return null;
}

export default App;
