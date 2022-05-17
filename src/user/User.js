import { useSelector } from 'react-redux'
import { Button } from '../common/buttons/Button'

export function User() {
  const user = useSelector((state) => state.user)
  const jobs = useSelector((state) => state.jobs.jobs)

  const jobsArray = Object.keys(jobs).map((key) => jobs[key])
  const newJobs = jobsArray.filter((job) => job.status === 'new')
  const appliedJobs = jobsArray.filter((job) => job.status === 'applied')
  const interviewingJobs = jobsArray.filter(
    (job) => job.status === 'interviewing'
  )
  const offerJobs = jobsArray.filter((job) => job.status === 'offer')
  const acceptedJobs = jobsArray.filter((job) => job.status === 'accepted')
  const rejectedJobs = jobsArray.filter((job) => job.status === 'rejected')
  const declinedJobs = jobsArray.filter((job) => job.status === 'declined')
  const closedJobs = jobsArray.filter((job) => job.status === 'closed')

  return (
    <div className=" w-cover min-h-cover max-w-5xl">
      <header className="bg-slate-900/50 shadow-cover-divider p-1 mb-2">
        <h2>Account info</h2>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email || 'none provided'}</h3>
      </header>
      <div>
        <h2>Jobs summaries</h2>
        <div className="grid grid-cols-2 content-center max-w-xs m-auto shadow-cover-divider p-1 mb-2">
          <div>New</div>
          <div>{newJobs.length}</div>
          <div>Applied</div>
          <div>{appliedJobs.length}</div>
          <div>Interviewing</div>
          <div>{interviewingJobs.length}</div>
          <div>Offer</div>
          <div>{offerJobs.length}</div>
          <div>Accepted</div>
          <div>{acceptedJobs.length}</div>
          <div>Rejected</div>
          <div>{rejectedJobs.length}</div>
          <div>Declined</div>
          <div>{declinedJobs.length}</div>
          <div>Closed</div>
          <div>{closedJobs.length}</div>
          <hr /> <hr />
          <div>Total</div>
          <div>{jobsArray.length}</div>
        </div>
      </div>
      <div className="flex">
        <Button text="Upate Email"></Button>
        <Button text="Upate Password"></Button>
        <Button text="Delete Account"></Button>
      </div>
    </div>
  )
}

/*
"new", "applied", "interviewing", "offer", "accepted", "rejected", "declined", "closed"*/
