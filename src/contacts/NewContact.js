import { ContactForm } from './ContactForm'
import { CreateButtons } from '../common/buttons/CreateButtons'
import { useNavigate } from 'react-router-dom'
import { addContact, setContactsMessage } from './contactsSlice'
import { url, postConfig } from '../adapters/config'
import { useSelector, useDispatch } from 'react-redux'
import { zeroPad } from '../utilityFunctions/zeroPad'

export function NewContact() {
  const navigate = useNavigate()
  const jwt = useSelector((state) => state.user.jwt)
  const dispatch = useDispatch()

  const handleSubmit = ({ event, contact }) => {
    event.preventDefault()
    fetch(url.contacts, postConfig(jwt, contact))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          setContactsMessage(resp)
        } else {
          dispatch(addContact(resp))
          //TODO: ?Cleaner way to redirect?
          navigate(`/contacts/contact${zeroPad(resp.data.attributes.id)}`)
        }
      })
  }

  const handleCancel = () => navigate(-1)

  return (
    <div>
      <h1>New Contact</h1>
      <ContactForm handleSubmit={handleSubmit}>
        <CreateButtons handleCancel={handleCancel} inputText="Create Contact" />
      </ContactForm>
    </div>
  )
}
