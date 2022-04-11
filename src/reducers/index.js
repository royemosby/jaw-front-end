import { combineReducers } from 'redux'

import { contacts } from './contacts'
import { jobs } from './jobs'
import { user } from './user'

export default combineReducers({
  contacts,
  jobs,
  user,
})
