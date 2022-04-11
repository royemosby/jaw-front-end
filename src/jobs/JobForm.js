import { TextInput } from '../common/form_inputs/TextInput'

//TODO select or add contact

export function JobForm() {
  return (
    <form action="" className="grid grid-cols-form gap-1">
      <label htmlFor="title">Job Title</label>
      <TextInput name="title" id="title" required="true" />
      <label htmlFor="job_type">Job Type</label>
      <select name="job_type" id="job_type" className="text-black">
        <option value="">Select</option>
        <option value="full-stack">Full-stack</option>
        <option value="front-end">Front-end</option>
        <option value="back-end">Back-end</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="company">Company</label>
      <TextInput name="company" id="company" />
      <label htmlFor="is_remote">Remote?</label>
      <select name="is_remote" id="is_remote" className="text-black">
        <option value="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="hybrid">Hybrid</option>
      </select>
      <label htmlFor="status">Status</label>
      <select name="status" id="status" className="text-black">
        <option value="new">New</option>
        <option value="applied">Applied</option>
        <option value="interviewing">Interviewing</option>
        <option value="offer">Offer</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="declined">Declined</option>
        <option value="closed">Closed</option>
      </select>
      <label htmlFor="posting_url">Posting URL</label>
      <TextInput name="posting_url" />
      <label htmlFor="date_posted">Date Posted</label>
      <input type="date" name="date_posted" id="date_posted" className="text-black" />
      <label htmlFor="date_applied">Date Applied</label>
      <input type="date" name="date_applied" id="date_applied" className="text-black" />
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" cols="40" rows="5" className="text-black"></textarea>
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="notes" cols="40" rows="5" className="text-black"></textarea>
    </form>
  )
}
