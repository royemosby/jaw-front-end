import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import contactsReducer from './contacts/contactsSlice'
import jobsReducer from './jobs/jobsSlice'
import iuReducer from './common/ui/uiSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contacts: contactsReducer,
    jobs: jobsReducer,
    ui: iuReducer,
  },
})
