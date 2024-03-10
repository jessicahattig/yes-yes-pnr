import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NewInputForm from './NewInputForm';
import Home from './Home';
import PacAbout from './PacAbout';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';

const firebaseConfig = {

}
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

function PageControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  
  useEffect(() => {
    const queryByTimestamp = collection(db, "inputs");
    const unSubscribe = onSnapshot(
      queryByTimestamp,
      (querySnapshot) => {
        const tickets = [];
        querySnapshot.forEach((doc) => {
          const timeOpen = doc.get('timeOpen', { serverTimestamps: "estimate" }).toDate();
          const jsDate = new Date(timeOpen);
          tickets.push({
            names: doc.data().names,
            location: doc.data().location,
            issue: doc.data().issue,
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate),
            id: doc.id
          });
        });
        setMainTicketList(tickets);
      },
      (error) => {
        setError(error.message);
      }
    );
    
    return () => unSubscribe();
  }, []);

  const handleAddingNewInput = async (newInputData) => {
    await addDoc(collection(db, "inputs"), newInputData);
    setFormVisibleOnPage(false);
  }

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


//////////////////////////


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function PageControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryByTimestamp = collection(db, "inputs");
    const unSubscribe = onSnapshot(
      queryByTimestamp,
      (querySnapshot) => {
        const tickets = [];
        querySnapshot.forEach((doc) => {
          const timeOpen = doc.get('timeOpen', { serverTimestamps: "estimate" }).toDate();
          const jsDate = new Date(timeOpen);
          tickets.push({
            names: doc.data().names,
            location: doc.data().location,
            issue: doc.data().issue,
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate),
            id: doc.id
          });
        });
        setMainTicketList(tickets);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, [db]);

  const handleAddingNewInput = async (newInputData) => {
    await addDoc(collection(db, "inputs"), newInputData);
    setFormVisibleOnPage(false);
  }

  // Rest of your component...

  return (
    // Routes and other JSX here
  );
}

export { db }; // Export the Firestore instance for use in other files
export default PageControl;
