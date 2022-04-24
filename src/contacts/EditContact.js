import { ContactForm } from './ContactForm'
import { UpdateButtons } from '../common/buttons/UpdateButtons'
import { useNavigate } from 'react-router-dom'

export function EditContact() {
  const navigate = useNavigate()

  const handleCancel = () => {
    return navigate(-1)
  }

  const handleSubmit = () => {
    console.log('contact submitted')
  }
  const handleDelete = () => {
    console.log('contact deleted')
  }
  return (
    <div>
      <h1>Edit Contact</h1>
      <ContactForm>
        <UpdateButtons
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
        />
      </ContactForm>
    </div>
  )
}
