import { ContactForm } from './ContactForm'
import { CreateButtons } from '../common/buttons/CreateButtons'
import { useNavigate } from 'react-router-dom'
import {
  addContact,
  setContactsMessage,
  clearContactsMessage,
  addFieldErrors,
  clearFieldErrors,
} from './contactsSlice'
import { openModal } from '../common/ui/uiSlice'
import { url, postConfig } from '../adapters/config'
import { useDispatch } from 'react-redux'
import { zeroPad } from '../utilityFunctions/zeroPad'

//TODO: rename new contact modal stuff to deconflict w/errors modal
export function NewContact({ asModal = false, closeModal }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = ({ event, contact }) => {
    event.preventDefault()
    dispatch(clearContactsMessage())
    dispatch(clearFieldErrors())
    fetch(url.contacts, postConfig(contact))
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          const reader = resp.body.getReader()
          return reader.read().then(({ done, value }) => {
            const message = new TextDecoder().decode(value)
            return JSON.parse(message)
          })
        }
      })
      .then((resp) => {
        if (resp.message) {
          dispatch(setContactsMessage(resp))
        } else if (resp.errors) {
          dispatch(addFieldErrors(resp))
          dispatch(openModal())
        } else {
          dispatch(addContact(resp))
          //TODO ?Cleaner way to redirect?
          if (!asModal) {
            navigate(`/contacts/contact${zeroPad(resp.data.attributes.id)}`)
          } else {
            closeModal({
              contactId: `contact${zeroPad(resp.data.attributes.id)}`,
            })
          }
        }
      })
      .catch((e) => console.dir(e.message))
  }

  const handleCancel = () => {
    dispatch(clearFieldErrors())
    if (asModal) {
      closeModal({ contactId: false })
    } else {
      navigate(-1)
    }
  }

  return (
    <div>
      <h1>New Contact</h1>
      <ContactForm handleSubmit={handleSubmit}>
        <CreateButtons handleCancel={handleCancel} inputText="Create Contact" />
      </ContactForm>
    </div>
  )
}
