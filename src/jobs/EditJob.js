import { JobForm } from './JobForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function EditJob() {
  const { jobId } = useParams()
  const job = useSelector((state) => state.jobs.jobs[jobId])
  const navigate = useNavigate()

  const handleCancel = () => {
    return navigate(-1)
  }

  const handleSubmit = () => {
    console.log('job submitted')
  }
  const handleDelete = () => {
    console.log('job deleted')
  }

  return (
    <div>
      <h1>Edit Job</h1>
      <JobForm job={job}>
        <UpdateButtons
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      </JobForm>
    </div>
  )
}
