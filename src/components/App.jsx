// import { useEffect, useState } from 'react';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
// import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     } else {
//       this.setState({ contacts: initialContacts });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   addContact = ({ name, number }) => {
//     this.state.contacts.some(
//       contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//     )
//       ? alert(`${name} is already in contacts`)
//       : this.setState(prevState => {
//           return {
//             contacts: [
//               ...prevState.contacts,
//               {
//                 id: nanoid(),
//                 name: name,
//                 number: number,
//               },
//             ],
//           };
//         });
//   };
//   onChangeInput = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };
//   filter = () => {
//     const { contacts, filter } = this.state;
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return filteredContacts;
//   };
//   delContact = id => {
//     const filtred = this.state.contacts.filter(contact => contact.id !== id);
//     this.setState({ contacts: filtred });
//   };

//   render() {
//     return (
//       <Layout>
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm addContact={this.addContact} />

//           <h2>Contacts</h2>
//           <Filter
//             filter={this.state.filter}
//             onChangeInput={this.onChangeInput}
//           />
//           <ContactList contacts={this.filter()} delContact={this.delContact} />
//         </div>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onChangeInput = evt => {
  //   setFilter(evt.target.value);
  // };

  // const addContact = ({ name, number }) => {
  //   contacts.some(
  //     contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //   )
  //     ? alert(`${name} is already in contacts`)
  //     : setContacts([
  //         ...contacts,
  //         {
  //           id: nanoid(6),
  //           name: name,
  //           number: number,
  //         },
  //       ]);
  // };

  // const delContact = id =>
  //   setContacts(contacts.filter(contact => contact.id !== id));

  // const filtering = () => {
  //   const filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  //   return filteredContacts;
  // };

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      <GlobalStyle />
    </Layout>
  );
};
