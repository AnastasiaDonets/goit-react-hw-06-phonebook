import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const LS_VALUE = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LS_VALUE);
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_VALUE, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    let newContact = values;

    const check = contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (check.length) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      newContact.id = nanoid();

      setContacts(prevState => [...prevState, newContact]);

      resetForm({
        name: '',
        number: '',
      });
    }
  };

  const handleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = evtId => {
    setContacts(contacts.filter(({ id }) => id !== evtId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter onFilter={handleFilter} />
      <ContactList
        contacts={contacts}
        filteredContacts={makeFiltredContacts()}
        onDelete={handleDelete}
      />
    </div>
  );
};
