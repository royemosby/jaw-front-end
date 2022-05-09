import { ContactForm } from './ContactForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteDialog } from '../common/DeleteDialog'
import { useState } from 'react'
import { url, deleteConfig, putConfig } from '../adapters/config'
import {
  updateContact,
  deleteContact,
  setContactsMessage,
} from './contactsSlice'

export function EditContact() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const { contactId } = useParams()
  const contact = useSelector((state) => state.contacts.contacts[contactId])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const disableDelete = () => {
    if (contact.jobIds.length === 0) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = ({ event, contact }) => {
    event.preventDefault()
    fetch(`${url.contacts}/${contact.id}`, putConfig(contact))
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.message) {
          dispatch(setContactsMessage(resp))
        } else {
          dispatch(updateContact(resp))
          navigate(-1)
        }
      })
  }
  const handleCancel = () => {
    return navigate(-1)
  }
  const handleDelete = () => {
    setDialogIsOpen(true)
  }

  const handleDialogCancel = () => {
    setDialogIsOpen(false)
  }
  const handleDialogConfirm = () => {
    fetch(`${url.contacts}/${contact.id}`, deleteConfig())
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          console.log('deletion failed')
          console.dir(resp.headers)
        }
      })
      .then((resp) => {
        setDialogIsOpen(false)
        navigate('/contacts')
        dispatch(setContactsMessage(resp))
        dispatch(deleteContact(contactId))
      })
  }

  return (
    <div className="relative">
      <h1>Edit Contact</h1>
      <ContactForm contact={contact} handleSubmit={handleSubmit}>
        <UpdateButtons
          disabled={disableDelete()}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
        />
      </ContactForm>
      {dialogIsOpen ? (
        <DeleteDialog
          title="Confirm Contact Delete"
          text="This action may not currently work if there are jobs associated with this contact. Removing contact's job associations is on the todo"
          cancelHandler={handleDialogCancel}
          confirmHandler={handleDialogConfirm}
          isOpen={dialogIsOpen}></DeleteDialog>
      ) : null}
    </div>
  )
}
