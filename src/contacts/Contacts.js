import { ContactCard } from './ContactCard'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { url, getConfig } from '../adapters/config'
import { Button } from '../common/buttons/Button'
import {
  addContacts,
  setContactsMessage,
  clearContactsMessage,
} from './contactsSlice'

export function Contacts() {
  const contacts = useSelector((state) => state.contacts.contacts)
  const contactIds = useSelector((state) => state.contacts.contactIds)
  const message = useSelector((state) => state.contacts.message)
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearContactsMessage)
    fetch(url.contacts, getConfig(jwt))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          dispatch(setContactsMessage(resp))
        } else {
          dispatch(addContacts(resp))
        }
      })
  }, [])
  const mapContacts = () => {
    if (message) {
      return (
        <div>
          <h1>{message}</h1>
          <Button
            action={(e) => dispatch(clearContactsMessage())}
            text="Dismiss"></Button>
        </div>
      )
    } else {
      return contactIds.map((contactId, id) => (
        <ContactCard {...contacts[contactId]} key={id} />
      ))
    }
  }
  return <div>{mapContacts()}</div>
}
