import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  message: '',
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.contacts = action.payload.data
    },
    createContact(state, action) {
      state.contacts.push(action.payload)
    },
    setContactsMessage: (state, action) => {
      state.message = action.payload.message
    },
  },
})

export const { addContacts, createContact, setContactsMessage } =
  contactsSlice.actions
export default contactsSlice.reducer
