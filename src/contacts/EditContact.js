import { ContactForm } from './ContactForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DeleteDialog } from '../common/DeleteDialog'
import { useState } from 'react'
import { deleteConfig, putConfig } from '../adapters/config'

export function EditContact() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const { contactId } = useParams()
  const contact = useSelector((state) => state.contacts.contacts[contactId])
  const navigate = useNavigate()

  const handleCancel = () => {
    return navigate(-1)
  }
  const handleDialogCancel = () => {
    setDialogIsOpen(false)
  }
  const handleDialogConfirm = () => {
    alert('Confirm delete pressed')
    setDialogIsOpen(false)
  }

  const handleSubmit = () => {
    console.log('contact submitted')
  }
  const handleDelete = () => {
    setDialogIsOpen(true)
  }
  return (
    <div className="relative">
      <h1>Edit Contact</h1>
      <ContactForm contact={contact}>
        <UpdateButtons
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
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
