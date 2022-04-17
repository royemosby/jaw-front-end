import { JobCard } from './JobCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { url, getConfig } from '../adapters/config'
import { addJobs, setJobsMessage } from '../jobs/jobsSlice'

export function Jobs() {
  const jobs = useSelector((state) => state.jobs.jobs)
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

  // const mapJobs = () => {
  //   return jobs.map((job) => <JobCard job={job} />)
  // }
  return (
    <div className="">
      <JobCard></JobCard>
    </div>
  )
}
