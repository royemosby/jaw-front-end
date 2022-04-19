import { Card } from '../common/Card'
import { useDispatch, useSelector } from 'react-redux'
import placeholder from '../contact.svg'
import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'
import { useEffect } from 'react'
//url name collision w/contact.url
import { url as fetchUrl, getConfig } from '../adapters/config'
import { unpad } from '../utilityFunctions/unpad'
import { addJob, setJobsMessage } from '../jobs/jobsSlice'

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
  const storeJobIds = useSelector((state) => state.jobs.jobIds)
  const storeJobsMessage = useSelector((state) => state.jobs.message)
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  useEffect(() => {
    //if jobIds exist
    if (jobIds) {
      jobIds.forEach((id) => {
        if (!storeJobs[id]) {
          fetch(`${fetchUrl.jobs}/${unpad(id)}`, getConfig(jwt))
            .then((resp) => resp.json())
            .then((resp) => {
              if (resp.message) {
                dispatch(setJobsMessage(resp))
              } else {
                dispatch(addJob(resp))
              }
            })
        }
      })
    }
    //forEach id
    //if !storeJobs[id]
    //fetch store(:id)
    //if message, dispatch setJobsMessage(resp)
    //else dispach addJob(resp)
  }, [])

  const contactJobs = () => {
    if (jobIds && jobIds.length > 0) {
      return (
        <div className="border-2 border-slate-500 rounded-sm p-0.5 m-0.5 bg-slate-900/25 max-w-5xl text-left">
          <h1>Jobs</h1>
          {jobIds.map((id) => {
            return (
              <h2>
                {storeJobs[id].title} with {storeJobs[id].company}
                {` (Status:${storeJobs[id].status})`}
              </h2>
            )
          })}
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
