import './App.css';
import React, { useState, useEffect ,useRef  } from 'react';

import { v4 as uuidv4 } from "uuid"; // ✅ Use this instead

import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const divRef = useRef(null);

  const addContactHandler = (data) => {
    console.log(data)
    setContacts([...contacts, {id: uuidv4(), ...data}])
  }

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((data) => {
      return data.id !== id;
    })
    setContacts(newContacts)
  }

  useEffect(() => {
    const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retrieveContacts && retrieveContacts !== "undefined") {
      setContacts(JSON.parse(retrieveContacts));
    }
  }, []);
  
  
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);
  
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty("padding-top", "105px", "important");
    }
  }, []);

  // const contacts = [
  //   { id: 1, name: "Amit Sharma", email: "amit.sharma@example.com" },
  //   { id: 2, name: "Priya Verma", email: "priya.verma@example.com" },
  //   { id: 3, name: "Ravi Patel", email: "ravi.patel@example.com" },
  //   { id: 4, name: "Sneha Iyer", email: "sneha.iyer@example.com" },
  //   { id: 5, name: "Vikas Nair", email: "vikas.nair@example.com" },
  //   { id: 6, name: "Neha Singh", email: "neha.singh@example.com" },
  //   { id: 7, name: "Arjun Reddy", email: "arjun.reddy@example.com" },
  //   { id: 8, name: "Deepika Pillai", email: "deepika.pillai@example.com" },
  //   { id: 9, name: "Suresh Yadav", email: "suresh.yadav@example.com" },
  //   { id: 10, name: "Kavita Kulkarni", email: "kavita.kulkarni@example.com" },
  //   { id: 11, name: "Rahul Mehta", email: "rahul.mehta@example.com" },
  //   { id: 12, name: "Ananya Bose", email: "ananya.bose@example.com" },
  //   { id: 13, name: "Manoj Choudhary", email: "manoj.choudhary@example.com" },
  //   { id: 14, name: "Sunita Bhattacharya", email: "sunita.bhattacharya@example.com" },
  //   { id: 15, name: "Karan Malhotra", email: "karan.malhotra@example.com" }
  // ];

  return (
    
    <div>
      <Header />

      <div class="  ui grid px-5 justify-content-evenly" ref={divRef}>
        <div class="seven wide border column">
          <AddContact addContactHandler={addContactHandler} />
        </div>
        <div class="seven wide border column">
          <ContactList contactList={contacts} contactId={removeContactHandler} />
        </div>
      </div>

    </div>
  );
}

export default App;
