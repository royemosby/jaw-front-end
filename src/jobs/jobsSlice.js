import { createSlice } from '@reduxjs/toolkit'
import { zeroPad } from '../utilityFunctions/zeroPad'

const initialState = {
  jobs: {},
  jobIds: [],
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
      jobsFlattened.forEach((j) => {
        //TODO: same string to contactId
        const jobId = `job${zeroPad(j.id)}`
        state.jobs[jobId] = j
        state.jobIds.push(jobId)
      })
    },
    addJob: (state, action) => {
      const jobFlattened = action.payload.data.attributes
      //TODO: same string to contactId
      const jobId = `job${zeroPad(jobFlattened.id)}`
      if (state.jobIds.includes(jobId)) {
        state.message = 'A job with this id already exists.'
      } else {
        state.jobs[jobId] = jobFlattened
        state.jobIds = [...state.jobIds, jobId].sort()
      }
    },
    setJobsMessage: (state, action) => {
      state.message = action.payload.message
    },
    clearJobsMessage: (state) => {
      state.message = ''
    },
  },
})

export const { addJobs, addJob, setJobsMessage } = jobsSlice.actions
export default jobsSlice.reducer
