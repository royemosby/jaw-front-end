import { JobForm } from './JobForm'
import { CreateButtons } from '../common/buttons/CreateButtons'
import {
  addJob,
  setJobsMessage,
  clearJobsMessage,
  addFieldErrors,
  clearFieldErrors,
} from './jobsSlice'
import { useNavigate } from 'react-router-dom'
import { url, postConfig } from '../adapters/config'
import { useDispatch } from 'react-redux'
import { zeroPad } from '../utilityFunctions/zeroPad'
import { openModal } from '../common/ui/uiSlice'

export function NewJob() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = ({ event, job }) => {
    event.preventDefault()
    if (job.contact_id && job.contact_id.length > 7) {
      job.contact_id = job.contact_id.slice(7, job.length)
    }
    dispatch(clearJobsMessage())
    dispatch(clearFieldErrors())
    fetch(url.jobs, postConfig(job))
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          const reader = resp.body.getReader()
          return reader.read().then(({ done, value }) => {
            const message = new TextDecoder().decode(value)
            return JSON.parse(message)
          })
        }
      })
      .then((resp) => {
        if (resp.message) {
          dispatch(setJobsMessage(resp))
        } else if (resp.errors) {
          dispatch(addFieldErrors(resp))
          dispatch(openModal())
        } else {
          dispatch(addJob(resp))
          navigate(`/jobs/job${zeroPad(resp.data.attributes.id)}`)
        }
      })
  }
  const handleCancel = () => {
    dispatch(clearFieldErrors())
    navigate(-1)
  }

  return (
    <div>
      <h1>New Job</h1>
      <JobForm handleSubmit={handleSubmit}>
        <CreateButtons
          handleCancel={handleCancel}
          inputText="Create Job"></CreateButtons>
      </JobForm>
    </div>
  )
}
