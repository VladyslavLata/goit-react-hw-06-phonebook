import { useSelector, useDispatch } from 'react-redux';
import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { add, remove, filter } from 'redux/contacts/contactsSlice';
import { getContacts, getFilterName } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const name = useSelector(getFilterName);

  const reviewNameInContacts = name => {
    return contacts.find(contact => contact.name === name);
  };

  const addContact = contact => {
    dispatch(add(contact));
  };

  const removeContact = removeContactId => {
    dispatch(remove(removeContactId));
  };

  const changeFilter = e => {
    dispatch(filter(e.currentTarget.value.trimStart()));
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
