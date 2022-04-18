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
      const contactsFlattened = action.payload.data.map((contact) => {
        const contactFlattened = Object.assign({}, contact.attributes, {
          jobs: contact.relationships.jobs.data,
        })
        return contactFlattened
      })
      state.contacts = contactsFlattened
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
