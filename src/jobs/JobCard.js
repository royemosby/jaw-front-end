import { Card } from '../common/Card'
import { ConditionalLinkWrapper } from '../common/conditionalLinkWrapper'
import placeholder from '../honey.svg'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { url, getConfig } from '../adapters/config'
import { unpad } from '../utilityFunctions/unpad'
import { addContact, setContactsMessage } from '../contacts/contactsSlice'

export function JobCard({
  company,
  contact_id,
  date_applied,
  date_posted,
  is_remote,
  job_type,
  location,
  logo_url,
  posting_url,
  status,
  title,
  jobId,
}) {
  const storeContacts = useSelector((state) => state.contacts.contacts)
  const storeContactIds = useSelector((state) => state.contacts.contactIds)
  const storeContactsMessage = useSelector((state) => state.contacts.contactIds)
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  useEffect(() => {
    if (contact_id && !storeContacts[contact_id]) {
      fetch(`${url.contacts}/${unpad(contact_id)}`, getConfig(jwt))
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.message) {
            dispatch(setContactsMessage(resp))
          } else {
            dispatch(addContact(resp))
          }
        })
    }
  }, [])

  const jobContact = () => {
    if (contact_id && storeContacts[contact_id]) {
      const contact = storeContacts[contact_id]
      return (
        <p className="text-left">
          {contact.first_name} {contact.last_name} |{' '}
          <a href={`mailto:${contact.email}`}>{contact.email}</a> |{' '}
          <a href={`tel:$contact.phone`}>{contact.phone}</a>
        </p>
      )
    } else if (contact_id) {
      return <p className="text-left">Contact not found</p>
    }
  }

  return (
    <Card resourceId={jobId} route="jobs">
      <div className="flex">
        <div className="h-16 m-0.5">
          <img
            src={logo_url ? logo_url : placeholder}
            alt=""
            className="h-full"
          />
        </div>
        <div className="text-left grow">
          <ConditionalLinkWrapper link={posting_url} condition={!!posting_url}>
            <h2 className="text-left">
              {title} | {job_type}
            </h2>
          </ConditionalLinkWrapper>
          <h3 className="text-left">{company}</h3>
        </div>
        <div>
          <p>
            {location} | {is_remote}
          </p>
        </div>
      </div>
      {jobContact()}
      <div className="flex justify-between">
        <p>Open: {date_posted}</p>
        <p>Applied: {date_applied || 'N/A'}</p>
        <p>Status: {status}</p>
      </div>
    </Card>
  )
}
