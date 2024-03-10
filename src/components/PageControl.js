import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import InputForm from './Donate';
import Home from './Home';
import PacAbout from './PacAbout';


function PageControl() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input-form" element={<InputForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/pac-about" element={<PacAbout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default PageControl;