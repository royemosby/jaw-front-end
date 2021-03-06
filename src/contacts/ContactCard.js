import { Card } from '../common/Card'
import { useDispatch, useSelector } from 'react-redux'
import placeholder from '../contact.svg'
import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'
import { useEffect } from 'react'
import { url, getConfig } from '../adapters/config'
import { unpad } from '../utilityFunctions/unpad'
import { addJob, setJobsMessage } from '../jobs/jobsSlice'

export function ContactCard({
  first_name,
  last_name,
  contact_type,
  email,
  social_url,
  phone,
  jobIds,
  id,
  updated_at,
  contactId,
}) {
  const storeJobs = useSelector((state) => state.jobs.jobs)
  const dispatch = useDispatch()

  useEffect(() => {
    if (jobIds) {
      jobIds.forEach((id) => {
        if (!storeJobs[id]) {
          fetch(`${url.jobs}/${unpad(id)}`, getConfig())
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
  }, [dispatch, jobIds, storeJobs])

  const contactJobs = () => {
    if (jobIds && jobIds.length > 0) {
      return (
        <div className="border-2 border-slate-500 rounded-sm p-0.5 m-0.5 bg-slate-900/25 max-w-5xl text-left">
          <h1>Jobs</h1>
          {jobIds.map((id) => {
            if (storeJobs[id]) {
              return (
                <h2 key={id}>
                  {storeJobs[id].title} with {storeJobs[id].company}
                  {` (Status:${storeJobs[id].status})`}
                </h2>
              )
            } else {
              return <h2 key={id}>Job not Found</h2>
            }
          })}
        </div>
      )
    }
  }

  return (
    <Card resourceId={contactId} route="contacts">
      <div className="flex">
        <div className="h-16 m-0 5">
          <img src={placeholder} alt="contact icon" className="h-full" />
        </div>
        <div className="text-left grow">
          <h2 className="text-left">
            <ConditionalLinkWrapper link={social_url} condition={!!social_url}>
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
