import React, { useEffect, useState } from 'react';
import { db, auth } from './../firebase.js';
import { collection, addDoc, doc, updateDoc, onSnapshot, deleteDoc, query, orderBy } from 'firebase/firestore'
import About from './About.js';
import Contact from './Contact.js';
import Donate from './Donate.js';
import { formatDistanceToNow } from 'date-fns';

function PageControl(){

  useEffect(() => {
    const queryByTimestamp = query(
      collection(db, "tickets"), 
      orderBy('timeOpen')
    );
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
        // setMainTicketList(tickets);
      },
      (error) => {
        // setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);
}

export default PageControl;