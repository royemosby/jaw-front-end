import { useEffect, useState } from 'react'
import { TextInput } from '../common/form_inputs/TextInput'

export function ContactForm({ contact, children }) {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [contact_type, setContactType] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [url, setUrl] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    if (contact) {
      setFirstName(contact.first_name || '')
      setLastName(contact.last_name || '')
      setContactType(contact.contact_type || '')
      setEmail(contact.email || '')
      setPhone(contact.phone || '')
      setUrl(contact.url || '')
      setNotes(contact.notes || '')
    }
  }, [])

  return (
    <form action="" className="grid grid-cols-form gap-1">
      <label htmlFor="first_name">First Name</label>
      <input
        type="text"
        className="text-black"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
        name="first_name"
      />
      <label htmlFor="last_name">Last Name</label>
      <input
        type="text"
        className="text-black"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
        name="last_name"
      />
      <label htmlFor="contact_type">Type</label>
      <select
        className="text-black"
        value={contact_type}
        onChange={(e) => setContactType(e.target.value)}
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
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        className="text-black"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        name="phone"
      />
      <label htmlFor="url">Social Presence</label>
      <input
        type="text"
        className="text-black"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        name="url"
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
