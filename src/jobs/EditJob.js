import { JobForm } from './JobForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { url, putConfig, deleteConfig } from '../adapters/config'
import { useState } from 'react'
import { DeleteDialog } from '../common/DeleteDialog'
import {
  updateJob,
  deleteJob,
  setJobsMessage,
  clearJobsMessage,
  addFieldErrors,
  clearFieldErrors,
} from './jobsSlice'
import { openModal } from '../common/ui/uiSlice'

export function EditJob() {
  const { jobId } = useParams()
  const job = useSelector((state) => state.jobs.jobs[jobId])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleCancel = () => {
    dispatch(clearFieldErrors())
    return navigate(-1)
  }

  const handleSubmit = ({ event, job }) => {
    event.preventDefault()
    dispatch(clearJobsMessage())
    dispatch(clearFieldErrors())
    if (job.contact_id && job.contact_id.length > 7) {
      job.contact_id = job.contact_id.slice(7, job.length)
    }
    fetch(`${url.jobs}/${job.id}`, putConfig(job))
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
          dispatch(setJobsMessage(resp.message))
        } else if (resp.errors) {
          dispatch(addFieldErrors(resp))
          dispatch(openModal())
        } else {
          dispatch(updateJob(resp))
          navigate(-1)
        }
      })
      .catch((e) => console.dir(e.message))
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
    fetch(`${url.jobs}/${job.id}`, deleteConfig())
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
