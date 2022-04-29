import { DetailsButtons } from '../common/buttons/DetailsButtons'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { JobCardFragment } from './jobCardFragment'
import { DeleteDialog } from '../common/DeleteDialog'
import { useState } from 'react'
//url name collision w/contact.url
import { url as deleteUrl, deleteConfig } from '../adapters/config'
import { setContactsMessage } from './contactsSlice'

export function ContactDetails() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const { contactId } = useParams()
  const {
    first_name,
    last_name,
    contact_type,
    email,
    phone,
    notes,
    url,
    updated_at,
    jobIds,
    id,
  } = useSelector((state) => state.contacts.contacts[contactId])

  const disableDelete = () => {
    if (jobIds.length === 0) {
      return false
    } else {
      return true
    }
  }

  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = () => {
    setDialogIsOpen(true)
  }
  const handleDialogCancel = () => {
    setDialogIsOpen(false)
  }
  const handleDialogConfirm = () => {
    fetch(`${deleteUrl.contacts}/${id}`, deleteConfig(jwt))
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          console.log('deletion failed')
          console.dir(resp.headers)
        }
      })
      .then((resp) => {
        dispatch(setContactsMessage(resp))
        navigate('/contacts')
      })
    setDialogIsOpen(false)
  }
  return (
    <div className="bg-slate-900/25 min-h-cover">
      <div className="text-left p-2 shadow-cover-divider bg-slate-900/50 flex justify-between	">
        <div>
          <h2>
            {first_name} {last_name} ({contact_type})
          </h2>
          <p className="mb-4">
            <a href={`mailto:${email}`}>{email}</a>
            <span> | </span>
            <a href={`tel:{phone}`}>{phone}</a>
          </p>
        </div>
        <div className="text-right">
          <p>Last Updated: {updated_at.date}</p>
          <p>{updated_at.time}</p>
        </div>
      </div>
      {url ? (
        <p>
          <a className="mb-4" href={url}>
            {url}
          </a>
        </p>
      ) : null}
      <div className="flex flex-col items-center p-2">
        <h2 className="self-start">Jobs</h2>

        {jobIds ? (
          jobIds.map((j, i) => <JobCardFragment jobId={j} key={i} />)
        ) : (
          <div>No jobs for this contact</div>
        )}
      </div>
      <div className="flex flex-col p-2 text-left">
        <details open>
          <summary>Notes</summary>
          <div>{notes}</div>
        </details>
      </div>
      <DetailsButtons
        route="contacts"
        resourceId={contactId}
        handleDelete={() => handleDelete()}
        disabled={disableDelete()}
      />
      {dialogIsOpen ? (
        <DeleteDialog
          title="Confirm Contact Delete"
          text="This action may not currently work if there are jobs associated with this contact. Removing contact's job associations is on the todo"
          cancelHandler={handleDialogCancel}
          confirmHandler={handleDialogConfirm}
          isOpen={dialogIsOpen}></DeleteDialog>
      ) : null}
    </div>
  )
}
