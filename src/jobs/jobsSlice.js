import { createSlice } from '@reduxjs/toolkit'
import { zeroPad } from '../utilityFunctions/zeroPad'

const initialState = {
  jobs: {},
  jobIds: [],
  message: '',
  shooters: 0,
  fullyLoaded: false,
  fieldErrors: {},
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJobs: (state, action) => {
      const jobsFlattened = action.payload.data.map((job) => {
        return Object.assign({}, job.attributes)
      })
      const ids = state.jobIds
      jobsFlattened.forEach((j) => {
        const jobId = `job${zeroPad(j.id)}`
        j['jobId'] = jobId
        if (j.contact_id) {
          j.contact_id = `contact${zeroPad(j.contact_id)}`
        }
        state.jobs[jobId] = j
        if (!ids.includes(jobId)) {
          ids.push(jobId)
        }
      })
      state.jobIds = ids.sort()
      state.fullyLoaded = true
    },
    addJob: (state, action) => {
      const jobFlattened = action.payload.data.attributes
      if (jobFlattened.contact_id) {
        jobFlattened.contact_id = `contact${zeroPad(jobFlattened.contact_id)}`
      }
      const jobId = `job${zeroPad(jobFlattened.id)}`
      jobFlattened['jobId'] = jobId
      if (state.jobIds.includes(jobId)) {
        state.shooters++ //tallying wasted actions
      } else {
        state.jobs[jobId] = jobFlattened
        state.jobIds = [...state.jobIds, jobId].sort()
      }
    },
    updateJob: (state, action) => {
      const jobFlattened = action.payload.data.attributes
      if (jobFlattened.contact_id) {
        jobFlattened.contact_id = `contact${zeroPad(jobFlattened.contact_id)}`
      }
      const jobId = `job${zeroPad(jobFlattened.id)}`
      jobFlattened.jobId = jobId
      state.jobs[jobId] = jobFlattened
    },
    deleteJob: (state, action) => {
      //TODO: destroy associations
      const jobId = action.payload
      const idx = state.jobIds.indexOf(jobId)
      state.jobIds = [
        ...state.jobIds.slice(0, idx),
        ...state.jobIds.slice(idx + 1, state.jobIds.length),
      ]
      delete state.jobs[jobId]
    },
    setJobsMessage: (state, action) => {
      state.message = action.payload.message
    },
    clearJobsMessage: (state) => {
      state.message = ''
    },
    addFieldErrors: (state, action) => {
      state.fieldErrors = action.payload.errors
    },
    clearFieldErrors: (state) => {
      state.fieldErrors = {}
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
  addFieldErrors,
  clearFieldErrors,
} = jobsSlice.actions
export default jobsSlice.reducer
