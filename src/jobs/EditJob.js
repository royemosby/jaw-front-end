import { JobForm } from './JobForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { url, putConfig, deleteConfig } from '../adapters/config'
import { useState } from 'react'
import { DeleteDialog } from '../common/DeleteDialog'
import { updateJob, deleteJob, setJobsMessage } from './jobsSlice'

export function EditJob() {
  const { jobId } = useParams()
  const job = useSelector((state) => state.jobs.jobs[jobId])
  const jwt = useSelector((state) => state.user.jwt)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleCancel = () => {
    return navigate(-1)
  }

  const handleSubmit = ({ event, job }) => {
    event.preventDefault()
    fetch(`${url.jobs}/${job.id}`, putConfig(jwt, job))
      .then((resp) => {
        return resp.json()
      })
      .then((resp) => {
        if (resp.message) {
          console.log(resp.message)
          dispatch(setJobsMessage(resp.message))
        } else {
          dispatch(updateJob(resp))
          navigate(-1)
        }
      })
  }

  const disableDelete = () => {
    if (job.contact_id) {
      return true
    } else {
      return false
    }
  }

  const handleDelete = () => {
    setDialogIsOpen(true)
  }

  const handleDialogCancel = () => {
    setDialogIsOpen(false)
  }

  const handleDialogConfirm = () => {
    fetch(`${url.jobs}/${job.id}`, deleteConfig(jwt))
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          console.log('deletion failed')
          console.dir(resp.headers)
        }
      })
      .then((resp) => {
        setDialogIsOpen(false)
        navigate('/jobs')
        dispatch(setJobsMessage(resp))
        dispatch(deleteJob(jobId))
      })
  }

  return (
    <div>
      <h1>Edit Job</h1>
      <JobForm handleSubmit={handleSubmit} job={job}>
        <UpdateButtons
          disabled={disableDelete()}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
        />
      </JobForm>
      {dialogIsOpen ? (
        <DeleteDialog
          title="Confirm Job Delete"
          text="This action may not currently work if there are contacts associated with this job. Removing contact's job associations is on the todo"
          cancelHandler={handleDialogCancel}
          confirmHandler={handleDialogConfirm}
          isOpen={dialogIsOpen}></DeleteDialog>
      ) : null}
    </div>
  )
}
