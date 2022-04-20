import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import { CardButtons } from '../common/buttons/CardButtons'

export function Card({
  children,
  openAction = () => console.log('open not wired'),
  editAction = () => console.log('edit not wired'),
}) {
  return (
    <div className="border-2 border-slate-500 rounded-sm p-0.5 m-0.5 bg-slate-900/25 w-cover max-w-5xl">
      {children}

      <CardButtons openAction={openAction} editAction={editAction} />
    </div>
  )
}
