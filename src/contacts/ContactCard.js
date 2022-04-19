import { Card } from '../common/Card'
import { useSelector } from 'react-redux'
import placeholder from '../contact.svg'

import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'

export function ContactCard({
  first_name,
  last_name,
  contact_type,
  email,
  url,
  phone,
  jobIds,
  id,
  updated_at,
}) {
  const storeJobs = useSelector((state) => state.jobs.jobs)

  const contactJobs = () => {
    if (jobIds.length > 0) {
      return (
        <div className="border-2 border-slate-500 rounded-sm p-0.5 m-0.5 bg-slate-900/25 max-w-5xl">
          <h1>You have some jobs to contend with yo</h1>
          <h2>TITLE with COMPANY (Status: STATUS)</h2>
        </div>
      )
    }
  }

  return (
    <Card>
      <div className="flex">
        <div className="h-16 m-0 5">
          <img src={placeholder} alt="contact icon" className="h-full" />
        </div>
        <div className="text-left grow">
          <h2 className="text-left">
            <ConditionalLinkWrapper link={url} condition={!!url}>
              {first_name} {last_name}{' '}
            </ConditionalLinkWrapper>
          </h2>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a> | Phone:{' '}
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
          <p>Type: {contact_type}</p>
        </div>
        <div>
          <p className="text-right">Last updated</p>
          <p className="text-right">{updated_at.date}</p>
          <p className="text-right">{updated_at.time}</p>
        </div>
      </div>

      {contactJobs()}
    </Card>
  )
}

/*
string "first_name"
string "last_name"
string "contact_type"
string "email"
string "url"
string "phone"
text "notes"
bigint "user_id"
datetime "created_at"
obj{date, time} "updated_at"
*/
