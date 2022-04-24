import { useSelector } from 'react-redux'

export function ContactNotesFragment({ contact_id }) {
  const { notes } = useSelector((state) => state.contacts.contacts[contact_id])
  return (
    <details>
      <summary>Contact notes</summary>
      <p>{notes}</p>
    </details>
  )
}
