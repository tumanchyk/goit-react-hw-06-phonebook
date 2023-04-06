import { useSelector, useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { addContact } from "redux/concactSlice.js";
import { Formik} from 'formik';
import { FormEl, Label, Input, Button, ErrorMessage } from "./Form.styled";
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const schema = yup.object().shape({
    name: yup.string().min(2).max(20).required(),
    number: yup.number().min(3).required(),
})

const initialValues = {
    name: '',
    number: '',
}

export default function ContactForm(){
    const contacts = useSelector (state => state.contacts.list)
    const dispatch = useDispatch();
  
    const onFormSubmit = ( contact ) =>{
      const someName = contacts.filter(item=> 
        contact.name.toLowerCase() === item.name.toLowerCase())
      if(someName.length === 1){
        Notify.failure(`${contact.name} is already in contacts.`);
       return;
      }
      dispatch(addContact(contact));
    }

    const handleSubmit = (values, actions) => {
        onFormSubmit({
            ...values,
            id: nanoid(7),
            });
       actions.resetForm();
    }
        return (
            <Formik 
            initialValues={initialValues}
            validationSchema = {schema}
            onSubmit={handleSubmit}>
            <FormEl>
                <Label>
                    Name
                    <Input
                    type="text"
                    name="name"
                    />
                    <ErrorMessage name="name" component="span" />
                </Label>
                <Label>
                    Number
                    <Input
                    type="tel"
                    name="number"
                    />
                    <ErrorMessage name="number" component="span" />
                </Label>
                <Button type='submit'>Add contact</Button>
            </FormEl>
            </Formik>
        )
      }

