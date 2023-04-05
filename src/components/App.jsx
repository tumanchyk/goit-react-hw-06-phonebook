import { useSelector, useDispatch } from "react-redux";
import { Container } from "./Styles/Container.styled.jsx";
import {Title1, Title2} from './Styles/Titles.styled.jsx'
import { ContactForm } from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { addContact, removeContact } from "redux/concactSlice.js";
import { setValue } from "redux/filterSlice.js";
import { myContacts } from "redux/concactSlice.js";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function App (){
  const contacts = useSelector (myContacts)
  const filter = useSelector (state => state.filter);
  const dispatch = useDispatch();

  function onFormSubmit( contact ){
    const someName = contacts.filter(item=> contact.name.toLowerCase() === item.name.toLowerCase())
    if(someName.length === 1){
      Notify.failure(`${contact.name} is already in contacts.`);
     return;
    }
    dispatch(addContact(contact));
  }

  const onDeleteContact = contactId => {    
    dispatch(removeContact(contactId))
 }

  const handleFilter = e => {
   dispatch(setValue(e.target.value))
  }

  const findContact = () => {
    if(!contacts) return
     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
     
  }
    const foundContacts = findContact()

  return (
    <Container>
  <Title1>Phonebook</Title1>
  <ContactForm onSubmit={onFormSubmit}/>

  <Title2>Contacts</Title2>
  <Filter value={filter} onChange={handleFilter}/> 
  <ContactList contacts={foundContacts} handleDelete={onDeleteContact}/>
    </Container>
  )
};
export { App };

