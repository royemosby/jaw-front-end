import { Card } from '../common/Card'
import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'
import placeholder from '../honey.svg'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export function JobCard({
  company,
  contact_id,
  date_applied,
  date_posted,
  is_remote,
  job_type,
  location,
  logo_url,
  posting_url,
  status,
  title,
}) {
  const storeContacts = useSelector((state) => state.contacts.contacts)

  const jobContact = () => {
    if (contact_id) {
      return <p>There's a contact to deal with yo</p>
    }
  }
  return (
    <Card>
      <ConditionalLinkWrapper link={posting_url} condition={!!posting_url}>
        <div className="flex">
          <div className="h-16 m-0.5">
            <img
              src={logo_url ? logo_url : placeholder}
              alt=""
              className="h-full"
            />
          </div>
          <div className="text-left grow">
            <h2 className="text-left">
              {title} | {job_type}
            </h2>
            <h3 className="text-left">{company}</h3>
          </div>
          <div>
            <p>
              {location} | {is_remote}
            </p>
          </div>
        </div>
      </ConditionalLinkWrapper>
      {jobContact()}
      <div className="flex justify-between">
        <p>Open: {date_posted}</p>
        <p>Applied: {date_applied || 'N/A'}</p>
        <p>Status: {status}</p>
      </div>
    </Card>
  )
}

/*
create_table "jobs", force: :cascade do |t|
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
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "date_applied"
    t.bigint "contact_id"
    t.text "notes"
    t.index ["contact_id"], name: "index_jobs_on_contact_id"
    t.index ["user_id"], name: "index_jobs_on_user_id"
  end
*/
