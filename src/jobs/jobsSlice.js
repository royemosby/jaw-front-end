import { createSlice } from '@reduxjs/toolkit'
import { zeroPad } from '../utilityFunctions/zeroPad'

const initialState = {
  jobs: {},
  jobIds: [],
  message: '',
  shooters: 0,
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
        const jobId = `job${zeroPad(j.id)}`
        j['jobId'] = jobId
        if (j.contact_id) {
          j.contact_id = `contact${zeroPad(j.contact_id)}`
        }
        state.jobs[jobId] = j
        state.jobIds.push(jobId)
      })
    },
    addJob: (state, action) => {
      const jobFlattened = action.payload.data.attributes
      if (jobFlattened.contact_id) {
        jobFlattened.contact_id = `contact${zeroPad(jobFlattened.contact_id)}`
      }
      const jobId = `job${zeroPad(jobFlattened.id)}`
      jobFlattened['jobId'] = jobId
      if (state.jobIds.includes(jobId)) {
        //state.message = 'A job with this id already exists.'
        state.shooters++
      } else {
        state.jobs[jobId] = jobFlattened
        state.jobIds = [...state.jobIds, jobId].sort()
      }
    },
    updateJob: (state, action) => {
      const jobFlattened = action.payload.data.attributes
      const jobId = `job${zeroPad(jobFlattened.id)}`
      jobFlattened.jobId = jobId
      state.jobs[jobId] = jobFlattened
    },
    deleteJob: (state, action) => {
      const jobId = action.payload
    },
    setJobsMessage: (state, action) => {
      state.message = action.payload.message
    },
    clearJobsMessage: (state) => {
      state.message = ''
    },
  },
})

export const {
  addJobs,
  addJob,
  updateJob,
  deleteJob,
  setJobsMessage,
  clearJobsMessage,
} = jobsSlice.actions
export default jobsSlice.reducer
