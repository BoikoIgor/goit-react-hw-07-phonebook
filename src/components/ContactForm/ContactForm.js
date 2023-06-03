import { useState } from 'react';
import { addContact } from 'Redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { arrContacts } from 'Redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const allContacts = useSelector(arrContacts);

  const onSubmit = e => {
    e.preventDefault();

    const uniqueName = name.toLowerCase().trim();
    const uniqueNumber = number.toLowerCase().trim();
    if (
      allContacts.find(
        ({ name }) => name.toLocaleLowerCase().trim() === uniqueName
      )
    ) {
      alert(
        `Please enter another name. ${name} is already exists in your contacts`
      );
      return;
    }
    if (
      allContacts.find(
        ({ number }) => number.toLocaleLowerCase().trim() === uniqueNumber
      )
    ) {
      alert(
        `Please enter another number. ${number} is already exists in your contacts`
      );
      return;
    }
    const id = nanoid();
    dispatch(addContact({ name, number, id }));
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        border: '0.1rem solid black',
        width: '50%',
        padding: '0.8rem',
      }}
    >
      <label
        style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
      >
        Name
        <input
          style={{ width: '40%' }}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1.5rem',
          gap: '0.5rem',
        }}
      >
        Number
        <input
          style={{ width: '40%' }}
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" style={{ marginTop: '1.5rem' }}>
        Add contact
      </button>
    </form>
  );
};
