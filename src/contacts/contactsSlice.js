import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { zeroPad } from '../utilityFunctions/zeroPad'

const initialState = {
  contacts: {},
  contactIds: [],
  message: '',
  shooters: 0,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      const contactsFlattened = action.payload.data.map((contact) => {
        const contactFlattened = Object.assign({}, contact.attributes)
        contactFlattened.jobIds = contact.relationships.jobs.data.map((j) => {
          return `job${zeroPad(j.id)}`
        })
        return contactFlattened
      })
      contactsFlattened.forEach((c) => {
        const contactId = `contact${zeroPad(c.id)}`
        state.contacts[contactId] = c
        state.contactIds.push(contactId)
      })
    },
    addContact(state, action) {
      const contactFlattened = action.payload.data.attributes
      const contactId = `contact${zeroPad(contactFlattened.id)}`
      if (state.contactIds.includes(contactId)) {
        //state.message = 'A contact with this id already exists'
        state.shooters++
      } else {
        state.contacts[contactId] = contactFlattened
        state.contactIds = [...state.contactIds, contactId].sort()
      }
    },
    setContactsMessage: (state, action) => {
      state.message = action.payload.message
    },
    clearContactsMessage: (state) => {
      state.message = ''
    },
  },
})

export const {
  addContacts,
  addContact,
  setContactsMessage,
  clearContactsMessage,
} = contactsSlice.actions
export default contactsSlice.reducer
