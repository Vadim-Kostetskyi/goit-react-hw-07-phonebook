import './style.css';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { useState, useEffect } from 'react';

const Feedback = () => {
  // const contactsList = JSON.parse(localStorage.getItem('contacts'));

  // const [contacts, setContacts] = useState(
  //   contactsList
  //     ? contactsList
  //     : [
  //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //       ]
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="box">
      {<Form />}
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
    </div>
  );
};

export const App = () => {
  return <div>{<Feedback />}</div>;
};
