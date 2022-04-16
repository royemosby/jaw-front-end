import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import contactsReducer from './contacts/contactsSlice'
import jobsReducer from './jobs/jobsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    jobs: jobsReducer,
  },
})
