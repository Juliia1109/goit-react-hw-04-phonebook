import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useState, useEffect } from 'react';


export function App () {

  const [contacts, setContacts] = useState([
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
    const [filter, setFilter] = useState('');

    useEffect(()=>{
      const newContacts = JSON.parse(localStorage.getItem("contacts"));
         if (newContacts) {
          setContacts(newContacts) 
         }
    },[]);
  
    useEffect(()=>{
    if (contacts)
        localStorage.setItem("contacts", JSON.stringify
         (contacts)) 
    },[contacts]);



 const addContacts = ({ name, number }) => {
    const contactEl = {
      id: nanoid(),
      name: name,
      number: number,
    };
    
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
        return;
    }
    setContacts(contacts => [...contacts,contactEl]);
  };

  const getVisibleContacts=()=> {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => 
        contact.name.toLowerCase().includes(normalizedFilter));
  }

  const onDeleteContacts = id => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== id)
    );
 };

  const componentFilter = e => {
    setFilter(e.currentTarget.value)
  }

    const visibleContacts =  getVisibleContacts();
    return (
      <div>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm 
      onSubmit={addContacts}/>

      <h2  className={css.text}>Contacts</h2>
      <Filter value={filter} onChange={componentFilter} />
      <ContactList 
       contacts={ visibleContacts }
      deleteContacts={onDeleteContacts} 
     />
      </div>
    );
  }


