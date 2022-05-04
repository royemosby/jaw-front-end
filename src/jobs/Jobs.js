import { JobCard } from './JobCard'
import { Button } from '../common/buttons/Button'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { url, getConfig } from '../adapters/config'
import { addJobs, setJobsMessage, clearJobsMessage } from '../jobs/jobsSlice'

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
      return (
        <div>
          <h1>{message}</h1>
          <Button
            action={(e) => dispatch(clearJobsMessage())}
            text="Dismiss"></Button>
        </div>
      )
    } else {
      return jobIds.map((jobId, id) => <JobCard {...jobs[jobId]} key={id} />)
    }
  }
  return <div>{mapJobs()}</div>
}
