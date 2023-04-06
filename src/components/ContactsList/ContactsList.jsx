import { useSelector, useDispatch } from "react-redux";
import { List, ContactItem, ButtonDelete } from "./Contacts.style";
import { removeContact } from "redux/concactSlice.js";

export default function ContactList (){
    const filter = useSelector (state => state.filter);
    const contacts = useSelector (state => state.contacts.list)
    const dispatch = useDispatch();
    
    const findContact = () => {
        if(!contacts) return
         return contacts.filter(contact => 
          contact.name.toLowerCase().includes(filter.toLowerCase())) 
      }

        const foundContacts = findContact();

    return (
        <List>
       { foundContacts.map(({id, name, number}) => 
        <ContactItem key={id}>{`${name}: ${number}`} 
            <ButtonDelete type="button" onClick={() => dispatch(removeContact(id))}>Delete</ButtonDelete>
        </ContactItem>)}
        </List>
    )
}
