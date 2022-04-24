import { useSelector } from 'react-redux'
import { JobCard } from '../jobs/JobCard'

export function JobCardFragment({ jobId }) {
  const job = useSelector((state) => state.jobs.jobs[jobId])
  return <JobCard {...job} />
}
