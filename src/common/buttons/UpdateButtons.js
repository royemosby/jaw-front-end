import { Button } from './Button'
import { InputSubmit } from './InputSubmit'

//TODO: rename to editFormButtons
export function UpdateButtons({ handleSubmit, handleDelete, handleCancel }) {
  return (
    <div className="flex col-span-2">
      <InputSubmit submit={handleSubmit} text="Update"></InputSubmit>
      <Button text="Cancel" action={handleCancel}></Button>
      <Button text="Delete" action={handleDelete}></Button>
    </div>
  )
}
