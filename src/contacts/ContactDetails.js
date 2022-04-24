import { DetailsButtons } from '../common/buttons/DetailsButtons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { JobCardFragment } from './jobCardFragment'

export function ContactDetails() {
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
  } = useSelector((state) => state.contacts.contacts[contactId])
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
      <DetailsButtons route="contacts" resourceId={contactId} />
    </div>
  )
}

/*
t.string "first_name"
t.string "last_name"
t.string "contact_type"
t.string "email"
t.string "url"
t.string "phone"
t.text "notes"
t.bigint "user_id", null: false
t.datetime "created_at", null: false
t.datetime "updated_at", null: false
*/
