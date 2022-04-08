import { ContactForm } from './ContactForm'
import { CreateButtons } from '../common/buttons/CreateButtons'

export function NewContact() {
  return (
    <div>
      <h1>New Contact</h1>
      <ContactForm />
      <CreateButtons />
    </div>
  )
}
