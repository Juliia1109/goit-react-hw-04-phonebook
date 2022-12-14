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
  // componentDidMount() {
  //   const newContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (newContacts) {
  //     this.setState({ contacts: newContacts });
  //   }
  // }
  
  // const componentDidUpdate(prevProps, prevState) {

  //   // if(prevState.contacts !== this.state.contacts){
  //   //   localStorage.setItem("contacts", JSON.stringify
  //   //   (this.state.contacts))
  //   // };
  // }

 const addContacts = ({ name, number }) => {
    // const contactEl = {
    //   id: nanoid(),
    //   name: name,
    //   number: number,
    // };

    // if (this.state.contacts.find(contact => contact.name === name)) {
    //   alert(`${name} is already in contacts`);
    //   return;
    // }

    // this.setState(({ contacts }) => ({
    //   contacts: [...contacts, contactEl],
    // }));
   
  };

  const getVisibleContacts=()=> {
    // const { filter, contacts } = this.state;
    // const normalizedFilter = filter.toLowerCase();
    // return contacts.filter(contact => 
    //   contact.name.toLowerCase().includes(normalizedFilter));
  }

  const onDeleteContacts =id=>{
//     this.setState((prevState)=> ({
//       contacts: prevState.contacts.filter(
//         (contact)=> contact.id !== id
//       ),
//  }))
 };

  const componentFilter = e => {
    // this.setState({filter: e.currentTarget.value});
  }

 
    // const { filter } = this.state;
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
      deleteContacts={ onDeleteContacts } 
     />
      </div>
    );
  }














