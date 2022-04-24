import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function ContactInfoFragment({ contact_id }) {
  const { first_name, last_name, email, phone, contactId } = useSelector(
    (state) => state.contacts.contacts[contact_id]
  )
  return (
    <>
      <h2>
        Contact:{' '}
        <Link to={`/contacts/${contactId}`}>
          {first_name} {last_name}
        </Link>
      </h2>
      <p className="mb-4">
        <a href={`mailto:${email}`}>{email}</a>
        <span> | </span>
        <a href={`tel:${phone}`}>{phone}</a>
      </p>
    </>
  )
}
