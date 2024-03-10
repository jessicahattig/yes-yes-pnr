import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NewInputForm from './NewInputForm';
import Home from './Home';
import PacAbout from './PacAbout';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function PageControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  // const [mainTicketList, setMainTicketList] = useState([]);
  // const [error, setError] = useState(null);


  const handleAddingNewInput = async (newInputData) => {
    await addDoc(collection(db, "inputs"), newInputData);
    setFormVisibleOnPage(false);
  }

  console.log(process.env);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-input-form" element={<NewInputForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/pac-about" element={<PacAbout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export { db };
export default PageControl;