import { ModalShell } from './ModalShell'
import { Button } from './buttons/Button'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from './ui/uiSlice'

export function ErrorMessages() {
  const dispatch = useDispatch()

  const isModalOpen = useSelector((state) => state.ui.isModalOpen)
  const userErrors = useSelector((state) => state.user.fieldErrors)
  const contactsErrors = useSelector((state) => state.contacts.fieldErrors)
  const jobsErrors = useSelector((state) => state.jobs.fieldErrors)

  const renderMessage = (errors) => {
    if (errors) {
      return Object.keys(errors).map((key, idx) => (
        <>
          <h3 key={`h3${idx}`} className="text-2xl font-bold">
            {key}:
          </h3>
          <p key={`p${idx}`}>- {errors[key].join('/n- ')}</p>
        </>
      ))
    } else {
      return <></>
    }
  }

  if (isModalOpen) {
    return (
      <ModalShell>
        <div>
          <h1 className="text-3xl  font-bold text-center">
            Errors occurred while processing your request
          </h1>
          {renderMessage(userErrors)}
          {renderMessage(jobsErrors)}
          {renderMessage(contactsErrors)}
        </div>
        <Button text="OK" action={(e) => dispatch(closeModal())}></Button>
      </ModalShell>
    )
  }
}
