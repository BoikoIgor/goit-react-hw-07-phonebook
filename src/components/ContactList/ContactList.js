import { arrContacts, delContact } from 'components/Redux/contactsSlice';
import { filterValue } from 'components/Redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  // const contactsList = useSelector(arrContacts);
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(arrContacts).filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!filteredContacts?.length) {
    return <div>Not found. Try something else</div>;
  }
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id} style={{ marginBottom: '0.5rem' }}>
          {contact.name}:{' '}
          <span>
            <b>{contact.number}</b>
          </span>
          <button
            style={{ marginLeft: '0.7rem', fontSize: '0.7rem' }}
            type="button"
            onClick={() => {
              dispatch(delContact(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
