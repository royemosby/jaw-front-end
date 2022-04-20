import { DetailsButtons } from '../common/buttons/DetailsButtons'
import { JobCard } from '../jobs/JobCard'

export function ContactDetails({
  id,
  first_name,
  last_name,
  contact_type,
  email,
  url,
  phone,
  jobIds,
  updated_at,
  contactId,
}) {
  return (
    <div className="bg-slate-900/25 min-h-cover">
      <div className="text-left p-2 shadow-cover-divider bg-slate-900/50 flex justify-between	">
        <div>
          <h2>Alexa Johnston (contact type)</h2>
          <p className="mb-4">
            <a href="mailto:ajohnston@recruitz.io">ajohnston@recruitz.io</a>
            <span> | </span>
            <a href="tel:702-263-9744">702-263-9744</a>
          </p>
        </div>
        <div>
          <p>Last Updated: 3/7/2022</p>
        </div>
      </div>
      <p className="mb-4">
        <a href="#">Social media presence</a>
      </p>
      <div className="flex flex-col items-center p-2">
        <h2 className="self-start">Jobs</h2>
        <JobCard></JobCard>
        <JobCard></JobCard>
      </div>
      <div className="flex flex-col p-2 text-left">
        <details open>
          <summary>Notes</summary>
          <div>
            <p>
              Laborum ipsum cupidatat velit aute. Ad cupidatat eu et laboris
              anim in sit ad do laboris Lorem amet ea. Esse Lorem ullamco
              consectetur commodo commodo aliquip veniam reprehenderit eu
              laborum sunt veniam sint consequat. Pariatur aliquip excepteur eu
              irure anim. Excepteur ea deserunt voluptate velit laboris Lorem
              magna voluptate nulla qui exercitation veniam labore.
            </p>
          </div>
        </details>
      </div>
      <DetailsButtons />
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
