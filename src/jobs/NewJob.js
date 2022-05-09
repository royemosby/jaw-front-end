import { JobForm } from './JobForm'
import { CreateButtons } from '../common/buttons/CreateButtons'
import { addJob, setJobsMessage } from './jobsSlice'
import { useNavigate } from 'react-router-dom'
import { url, postConfig } from '../adapters/config'
import { useSelector, useDispatch } from 'react-redux'
import { zeroPad } from '../utilityFunctions/zeroPad'

export function NewJob() {
  const navigate = useNavigate()
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  const handleSubmit = ({ event, job }) => {
    if (job.contact_id && job.contact_id.length > 7) {
      job.contact_id = job.contact_id.slice(7, job.length)
    }
    event.preventDefault()
    fetch(url.jobs, postConfig(jwt, job))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          setJobsMessage(resp)
        } else {
          dispatch(addJob(resp))
          navigate(`/jobs/job${zeroPad(resp.data.attributes.id)}`)
        }
      })
  }
  const handleCancel = () => navigate(-1)

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
