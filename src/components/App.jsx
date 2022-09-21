import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const MY_CONTACTS = 'myContacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(MY_CONTACTS)) ?? [];
  });
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem(MY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const reviewNameInContacts = name => {
    return contacts.find(contact => contact.name === name);
  };

  const addContact = contact => {
    setContacts(state => [contact, ...state]);
  };

  const removeContact = removeContactId => {
    setContacts(state =>
      state.filter(contact => contact.id !== removeContactId)
    );
  };

  const changeFilter = e => {
    setName(e.currentTarget.value.trimStart());
  };

  const getVisibleContacts = () => {
    const nameNormalized = name.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameNormalized)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <>
      <Section title="Phonebook">
        <PhonebookForm
          onAddContact={addContact}
          onReviewName={reviewNameInContacts}
        />
      </Section>
      <Section title="Contacts">
        <Filter
          filterHeader="Find contacts by name"
          value={name}
          onChange={changeFilter}
        />
        {visibleContacts.length > 0 && (
          <Contacts
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        )}
      </Section>
    </>
  );
};
