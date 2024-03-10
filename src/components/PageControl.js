import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import NewInputForm from './NewInputForm';
import Home from './Home';
import PacAbout from './PacAbout';
import { collection, addDoc } from "firebase/firebase";

function PageControl() {

  const [ formVisibleOnPage, setFormVisibleOnPage ] = useState(false);
  // const [ mainTicketList, setMainTicketList ] = useState([]);
  // const [ selectedTicket, setSelectedTicket ] = useState(null);
  // const [ editing, setEditing ] = useState(false);
  // const [ error, setError ] = useState(null);

  useEffect(() => {
    // const queryByTimestamp = query(
    //   collection(db, "inputs"), 
    //   // orderBy('timeOpen')
    // );
    const unSubscribe = onSnapshot(
      queryByTimestamp, 
      (querySnapshot) => {
        const tickets = [];
        querySnapshot.forEach((doc) => {
          const timeOpen = doc.get('timeOpen', {serverTimestamps: "estimate"}).toDate();
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

export default PageControl;