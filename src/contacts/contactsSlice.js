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
        contactFlattened.contactId = `contact${zeroPad(contact.id)}`
        contactFlattened.jobIds = contact.relationships.jobs.data.map((j) => {
          return `job${zeroPad(j.id)}`
        })
        return contactFlattened
      })
      const ids = state.contactIds
      contactsFlattened.forEach((c) => {
        const contactId = `contact${zeroPad(c.id)}`
        state.contacts[contactId] = c
        if (ids.indexOf(contactId) < 0) {
          ids.push(contactId)
        }
      })
      state.contactIds = ids.sort()
    },
    addContact(state, action) {
      const contactFlattened = action.payload.data.attributes
      const contactId = `contact${zeroPad(contactFlattened.id)}`
      const jobs = action.payload.data.relationships.jobs.data
      contactFlattened.jobIds = jobs.map((j) => {
        return `job${zeroPad(j.id)}`
      })
      contactFlattened['contactId'] = `contact${zeroPad(contactFlattened.id)}`
      if (state.contactIds.includes(contactId)) {
        state.shooters++ //tallying wasted actions
      } else {
        state.contacts[contactId] = contactFlattened
        state.contactIds = [...state.contactIds, contactId].sort()
      }
    },
    updateContact(state, action) {
      const contactFlattened = action.payload.data.attributes
      const jobs = action.payload.data.relationships.jobs.data
      contactFlattened.jobIds = jobs.map((j) => {
        return `job${zeroPad(j.id)}`
      })
      contactFlattened.contactId = `contact${zeroPad(contactFlattened.id)}`
      state.contacts[contactFlattened.contactId] = contactFlattened
    },
    deleteContact(state, action) {
      //TODO: destroy associations
      const contactId = action.payload
      const idx = state.contactIds.indexOf(contactId)
      state.contactIds = [
        ...state.contactIds.slice(0, idx),
        ...state.contactIds.slice(idx + 1, state.contactIds.length),
      ]
      delete state.contacts[contactId]
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
  updateContact,
  deleteContact,
  setContactsMessage,
  clearContactsMessage,
} = contactsSlice.actions
export default contactsSlice.reducer
