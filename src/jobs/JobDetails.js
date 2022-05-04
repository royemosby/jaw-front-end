import placeholder from '../honey.svg'
import { DetailsButtons } from '../common/buttons/DetailsButtons'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ContactInfoFragment } from './contactInfoFragment'
import { ContactNotesFragment } from './contactNotesFragment'
import { url, deleteConfig } from '../adapters/config'
import { DeleteDialog } from '../common/DeleteDialog'
import { useState } from 'react'
import { deleteJob, setJobsMessage } from './jobsSlice'

export function JobDetails() {
  const { jobId } = useParams()
  const {
    title,
    job_type,
    company,
    location,
    is_remote,
    status,
    posting_url,
    logo_url,
    date_posted,
    date_applied,
    description,
    updated_at,
    contact_id,
    notes,
    id,
  } = useSelector((state) => state.jobs.jobs[jobId])

  const jwt = useSelector((state) => state.user.jwt)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  const handleDelete = () => {
    setDialogIsOpen(true)
  }
  const handleDialogCancel = () => {
    setDialogIsOpen(false)
  }
  const disableDelete = () => {
    if (contact_id) {
      return true
    } else {
      return false
    }
  }

  const handleDialogConfirm = () => {
    fetch(`${url.jobs}/${id}`, deleteConfig(jwt))
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
    <div className="bg-slate-900/25 min-h-cover ">
      <header className="flex shadow-cover-divider p-1 mb-2 bg-slate-900/50 items-center">
        <div className="h-16 m-0.5">
          <img
            src={logo_url ? logo_url : placeholder}
            alt={`${company} logo`}
            className="h-full"
          />
        </div>
        <div className="text-left grow">
          <h2 className="text-left">
            {title} | {job_type}
          </h2>
          <h3 className="text-left">{company}</h3>
        </div>
        <div className="text-right">
          <p>
            {location} | {is_remote}
          </p>
          <p>
            Last Update: {updated_at.time} {updated_at.date}
          </p>
        </div>
      </header>
      <div className="flex justify-between p-2">
        <p>Open: {date_posted}</p>
        {date_applied ? `<p>Applied: ${date_applied}</p>` : ''}
        <p>Status: {status}</p>
      </div>
      <div className="text-left p-2 shadow-cover-divider">
        {contact_id ? (
          <ContactInfoFragment contact_id={contact_id} />
        ) : (
          <h2>No contact for this job</h2>
        )}
        <p className="mb-4">
          <a href={posting_url}>Posting/Company Link</a>
        </p>
        {contact_id ? <ContactNotesFragment contact_id={contact_id} /> : null}
      </div>
      <hr className="border-slate-600" />
      <div className="p-2 shadow-cover-divider text-left">
        <details open>
          <summary>Position Description</summary>
          <p>{description}</p>
        </details>
      </div>
      <hr className="border-slate-600" />
      <div className="p-2 shadow-cover-divider text-left">
        <details open>
          <summary>Notes</summary>
          {notes}
        </details>
      </div>
      <hr className="border-slate-600" />
      <DetailsButtons
        route="jobs"
        resourceId={jobId}
        handleDelete={() => handleDelete()}
        disabled={disableDelete()}
      />
      {dialogIsOpen ? (
        <DeleteDialog
          title="Confirm Job Delete"
          text="This action may not currently work if there are jobs associated with this contact. Removing a job's contact associations is on the todo"
          cancelHandler={handleDialogCancel}
          confirmHandler={handleDialogConfirm}
          isOpen={dialogIsOpen}></DeleteDialog>
      ) : null}
    </div>
  )
}

/*
t.string "title"
t.string "job_type"
t.string "company"
t.string "location"
t.string "is_remote"
t.string "status"
t.string "posting_url"
t.string "logo_url"
t.date "date_posted"
t.string "description"
t.bigint "user_id", null: false
  ##if updated is null use created
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
t.date "date_applied"
t.bigint "contact_id"
t.text "notes"
*/
