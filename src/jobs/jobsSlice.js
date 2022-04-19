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
      const jobsFlattened = action.payload.data.map((job) => {
        return Object.assign({}, job.attributes)
      })
      state.jobs = jobsFlattened
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload.data)
    },
    setJobsMessage: (state, action) => {
      state.message = action.payload.message
    },
  },
})

export const { addJobs, addJob, setJobsMessage } = jobsSlice.actions
export default jobsSlice.reducer
