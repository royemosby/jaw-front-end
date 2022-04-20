import { Button } from './Button'

export function CardButtons({ openAction, editAction }) {
  return (
    <div className="flex">
      <Button text="Open" action={openAction}></Button>
      <Button text="Edit" action={editAction}></Button>
    </div>
  )
}
