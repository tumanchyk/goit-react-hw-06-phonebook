import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const list = []
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {list},
    reducers: {
        addContact: (state, action) => {
            state.list.unshift(action.payload)
        },
        removeContact: (state, action) => { 
            state.list = state.list.filter(({id}) => id !== action.payload)
        }
    }
})

const persistConfig = {
    key: 'contact',
    storage,
    whitelist: ['list'],
  }

 export const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer)
 export const {addContact, removeContact} =  contactsSlice.actions;
 export const myContacts = state => state.contacts.list;