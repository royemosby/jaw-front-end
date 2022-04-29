import { Button } from './Button'
import { InputSubmit } from './InputSubmit'

//TODO: rename to editFormButtons
export function UpdateButtons({
  handleDelete,
  handleCancel,
  disabled = false,
}) {
  return (
    <div className="flex col-span-2">
      <InputSubmit text="Update"></InputSubmit>
      <Button text="Cancel" action={handleCancel}></Button>
      <Button text="Delete" disabled={disabled} action={handleDelete}></Button>
    </div>
  )
}
