import { Button } from './Button'

//TODO: rename to editFormButtons
export function UpdateButtons({ handleSubmit, handleDelete, handleCancel }) {
  return (
    <div className="flex col-span-2">
      <Button text="Update" action={handleSubmit}></Button>
      <Button text="Cancel" action={handleCancel}></Button>
      <Button text="Delete" action={handleDelete}></Button>
    </div>
  )
}
