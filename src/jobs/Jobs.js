import { JobCard } from './JobCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { url, getConfig } from '../adapters/config'
import { addJob, addJobs, setJobsMessage } from '../jobs/jobsSlice'

export function Jobs() {
  const jobs = useSelector((state) => state.jobs.jobs)
  const jobIds = useSelector((state) => state.jobs.jobIds)
  const message = useSelector((state) => state.jobs.message)
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(url.jobs, getConfig(jwt))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          dispatch(setJobsMessage(resp))
        } else {
          dispatch(addJobs(resp))
        }
      })
  }, [])

  const mapJobs = () => {
    if (message) {
      return <h1>{message}</h1>
    } else {
      return jobIds.map((jobId, id) => <JobCard {...jobs[jobId]} key={id} />)
    }
  }
  return <div className="">{mapJobs()}</div>
}
