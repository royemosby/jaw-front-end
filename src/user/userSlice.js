import { createSlice } from '@reduxjs/toolkit'
// look into createAsyncThunk for loading, success, failure

const initialState = {
  email: '',
  username: '',
  jwt: '',
  message: '',
  created: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  //redux-toolkit uses immer to track/update mutations
  reducers: {
    setUser: (state, action) => {
      state.created = action.payload.user.created_at
      state.email = action.payload.user.email
      state.password = action.payload.user.password
      state.username = action.payload.user.username
      state.jwt = action.payload.jwt
      state.message = ''
    },
    setUserMessage: (state, action) => {
      state.message = action.payload.message
    },
    clearUserMessage: (state) => {
      state.message = ''
    },
  },
})

export const { setUser, setUserMessage, clearUserMessage } = userSlice.actions
export default userSlice.reducer
