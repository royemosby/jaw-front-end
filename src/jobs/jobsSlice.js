import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  jobs: [],
  message: '',
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJobs: (state, action) => {
      state.jobs = action.payload.data
    },
    createJob: (state, action) => {
      state.jobs.push(action.payload.data)
    },
    setJobsMessage: (state, action) => {
      state.message = action.payload.message
    },
  },
})

export const { addJobs, createJob, setJobsMessage } = jobsSlice.actions
export default jobsSlice.reducer
