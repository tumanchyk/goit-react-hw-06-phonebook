import { Container } from "./Styles/Container.styled.jsx";
import {Title1, Title2} from './Styles/Titles.styled.jsx'
import  ContactForm  from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";


function App (){
  return (
    <Container>
  <Title1>Phonebook</Title1>
  <ContactForm/>

  <Title2>Contacts</Title2>
  <Filter/> 
  <ContactList/>
    </Container>
  )
};
export { App };

