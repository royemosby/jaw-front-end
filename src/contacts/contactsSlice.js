import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = []

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts(state, action) {
      state.concat(action.payload)
    },
    createContact(state, action) {
      state.push(action.payload)
    },
  },
})

export const { addContacts, createContact } = contactsSlice.actions
export default contactsSlice.reducer
