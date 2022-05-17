import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearFieldErrors } from './contactsSlice'

export function ContactForm({ contact, children, handleSubmit }) {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [contact_type, setContactType] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [social_url, setSocialUrl] = useState('')
  const [socialUrlError, setSocialUrlError] = useState('')
  const [notes, setNotes] = useState('')
  const [id, setId] = useState('')

  const fieldErrors = useSelector((state) => state.contacts.fieldErrors)
  const dispatch = useDispatch()

  useEffect(() => {
    if (contact) {
      setFirstName(contact.first_name || '')
      setLastName(contact.last_name || '')
      setContactType(contact.contact_type || '')
      setEmail(contact.email || '')
      setPhone(contact.phone || '')
      setSocialUrl(contact.social_url || '')
      setNotes(contact.notes || '')
      setId(contact.id || '')
    }
  }, [contact])

  useEffect(() => {
    setEmailError(fieldErrors?.email ? 'error' : '')
    setPhoneError(fieldErrors?.phone ? 'error' : '')
    setSocialUrlError(fieldErrors?.social_url ? 'error' : '')
  }, [fieldErrors])

  const submit = (e) => {
    dispatch(clearFieldErrors())
    return handleSubmit({
      event: e,
      contact: {
        first_name,
        last_name,
        contact_type,
        email,
        phone,
        social_url,
        notes,
        id,
      },
    })
  }

  return (
    <form onSubmit={(e) => submit(e)} className="grid grid-cols-form gap-1">
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        className="text-black"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        name="first_name"
        required
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        className="text-black"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        name="last_name"
        required
      />
      <label htmlFor="contact_type">Type</label>
      <select
        className="text-black"
        value={contact_type}
        onChange={(e) => setContactType(e.target.value)}
        required
        name="contact_type">
        <option value="">Select</option>
        <option value="recruiter">Recruiter</option>
        <option value="personal">Personal</option>
        <option value="peer">Peer</option>
        <option value="manager">Manager</option>
        <option value="employee">Employee</option>
        <option value="flatiron alumni">Flatiron Alumni</option>
        <option value="other">Other</option>
      </select>
      <label htmlFor="email" className={emailError}>
        Email
      </label>
      <input
        type="text"
        className={`${emailError} text-black`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <label htmlFor="phone" className={phoneError}>
        Phone
      </label>
      <input
        type="text"
        className={`${phoneError} text-black`}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
      />
      <label htmlFor="url" className={socialUrlError}>
        Social Presence
      </label>
      <input
        type="text"
        className={`${socialUrlError} text-black`}
        value={social_url}
        onChange={(e) => setSocialUrl(e.target.value)}
        name="social_url"
      />
      <label htmlFor="notes">Notes</label>
      <textarea
        className="text-black"
        name="notes"
        id=""
        cols="50"
        rows="5"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      {children}
    </form>
  )
}
