import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = []

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    loadJobs(state, action) {
      state.concat(action.payload)
    },
    createJob(state, action) {
      state.push(action.payload)
    },
  },
})

export const { addJobs, createJob } = jobsSlice.actions
export default jobsSlice.reducer
