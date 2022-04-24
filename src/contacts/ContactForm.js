import { TextInput } from '../common/form_inputs/TextInput'

export function ContactForm({ contact, children }) {
  return (
    <form action="" className="grid grid-cols-form gap-1">
      <label htmlFor="first_name">First Name</label>
      <TextInput name="first_name" />
      <label htmlFor="last_name">Last Name</label>
      <TextInput name="last_name" />
      <label htmlFor="contact_type">Type</label>
      <TextInput name="last_name" />
      <label htmlFor="email">Email</label>
      <TextInput name="email" />
      <label htmlFor="phone">Phone</label>
      <TextInput name="phone" />
      <label htmlFor="url">Social Presence</label>
      <TextInput name="url" />
      <label htmlFor="notes">Notes</label>
      <textarea name="notes" id="" cols="50" rows="5"></textarea>
      {children}
    </form>
  )
}
