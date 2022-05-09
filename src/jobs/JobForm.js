import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { url, getConfig } from '../adapters/config'
import { setContactsMessage, addContacts } from '../contacts/contactsSlice'
import { NewContact } from '../contacts/NewContact'
import { ModalShell } from '../common/ModalShell'

//TODO select or add contact
export function JobForm({ job, children, handleSubmit }) {
  const today = () => {
    const dateTime = new Date().toISOString()
    return dateTime.slice(0, dateTime.indexOf('T'))
  }

  const [title, setTitle] = useState('')
  const [job_type, setJobType] = useState('')
  const [company, setCompany] = useState('')
  const [location, setLocation] = useState('')
  const [is_remote, setIsRemote] = useState('')
  const [status, setStatus] = useState('new')
  const [posting_url, setPostingUrl] = useState('')
  const [logo_url, setLogoUrl] = useState('')
  const [date_posted, setDatePosted] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [date_applied, setDateApplied] = useState('')
  const [contact_id, setContactId] = useState('')
  const [id, setId] = useState('')

  const [contactModalOpen, setContactModalOpen] = useState(false)

  const contacts = useSelector((state) => state.contacts.contacts)
  const contactIds = useSelector((state) => state.contacts.contactIds)
  const contactsLoaded = useSelector((state) => state.contacts.fullyLoaded)
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()
  const loadContacts = () => {
    fetch(url.contacts, getConfig(jwt))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          console.log(resp.message)
          dispatch(setContactsMessage)
        } else {
          dispatch(addContacts(resp))
        }
      })
  }

  useEffect(() => {
    if (job) {
      setTitle(job.title || '')
      setJobType(job.job_type || '')
      setCompany(job.company || '')
      setLocation(job.location || '')
      setIsRemote(job.is_remote || '')
      setStatus(job.status || '')
      setPostingUrl(job.posting_url || '')
      setLogoUrl(job.logo_url || '')
      setDatePosted(job.date_posted || '')
      setDescription(job.description || '')
      setNotes(job.notes || '')
      setDateApplied(job.date_applied || '')
      setContactId(job.contact_id || '')
      setId(job.id || '')
    } else {
      setDatePosted(today)
    }
    if (!contactsLoaded) {
      loadContacts()
    }
  }, [])

  useEffect(() => {
    if (contact_id === 'createNew') {
      setContactModalOpen(true)
    }
  }, [contact_id])

  const submit = (e) => {
    handleSubmit({
      event: e,
      job: {
        title,
        job_type,
        company,
        location,
        is_remote,
        status,
        posting_url,
        logo_url,
        date_posted,
        description,
        notes,
        date_applied,
        id,
        contact_id,
      },
    })
  }

  //TODO need error handling
  const closeContactModal = ({ contactId }) => {
    if (!!contactId) {
      console.log('!!!!!!!', contactId)
      setContactId(contactId)
    } else {
      setContactId('')
    }
    setContactModalOpen(false)
  }

  const createContact = () => {
    if (contact_id === 'createNew') {
      return (
        <ModalShell>
          <NewContact asModal={true} closeModal={closeContactModal} />
        </ModalShell>
      )
    }
  }

  return (
    <>
      <form
        onSubmit={(evt) => submit(evt)}
        className="grid grid-cols-form gap-1">
        <label htmlFor="title">Job Title</label>
        <input
          className="text-black"
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="job_type">Job Type</label>
        <select
          name="job_type"
          id="job_type"
          className="text-black"
          value={job_type}
          required
          onChange={(e) => setJobType(e.target.value)}>
          <option value="">Select</option>
          <option value="full-stack">Full-stack</option>
          <option value="front-end">Front-end</option>
          <option value="back-end">Back-end</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="company">Company</label>
        <input
          className="text-black"
          type="text"
          name="company"
          id="company"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <label htmlFor="logo_url">Logo Url</label>
        <input
          className="text-black"
          type="text"
          name="logo_url"
          value={logo_url}
          onChange={(e) => setLogoUrl(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          className="text-black"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="is_remote">Remote?</label>
        <select
          name="is_remote"
          id="is_remote"
          className="text-black"
          value={is_remote}
          required
          onChange={(e) => setIsRemote(e.target.value)}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <label htmlFor="status">Status</label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          name="status"
          id="status"
          className="text-black"
          value={status}>
          <option value="new">New</option>
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
          <option value="declined">Declined</option>
          <option value="closed">Closed</option>
        </select>
        <label htmlFor="contact">Contact</label>
        <select
          name="contact"
          id="contact"
          className="text-black"
          value={contact_id}
          onChange={(e) => setContactId(e.target.value)}>
          <option value="">None(or select)</option>
          <option value="createNew">Create new...</option>
          {contactIds.map((c) => (
            <option value={c} key={c}>
              {`${contacts[c].first_name} ${contacts[c].last_name}`}
            </option>
          ))}
        </select>

        <label htmlFor="posting_url">Posting URL</label>
        <input
          className="text-black"
          type="text"
          name="posting_url"
          value={posting_url}
          onChange={(e) => setPostingUrl(e.target.value)}
        />
        <label htmlFor="date_posted">Date Posted</label>
        <input
          type="date"
          name="date_posted"
          id="date_posted"
          className="text-black"
          value={date_posted}
          onChange={(e) => setDatePosted(e.target.value)}
        />
        <label htmlFor="date_applied">Date Applied</label>
        <input
          type="date"
          name="date_applied"
          id="date_applied"
          className="text-black"
          value={date_applied}
          onChange={(e) => setDateApplied(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="40"
          rows="5"
          className="text-black"
          onChange={(e) => setDescription(e.target.value)}
          value={description}></textarea>
        <label htmlFor="notes">Notes</label>
        <textarea
          name="notes"
          id="notes"
          cols="40"
          rows="5"
          className="text-black"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
        {children}
      </form>
      {createContact()}
    </>
  )
}
