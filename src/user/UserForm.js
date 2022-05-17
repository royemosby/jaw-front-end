import { Button } from '../common/buttons/Button'

export function UserForm({ buttonText = 'Update' }) {
  return (
    <form action="" className="grid grid-cols-form gap-1 mb-4">
      <label htmlFor="username" className="text-left">
        Username
      </label>
      <input type="text" className="border-slate-300 border-2" />
      <label htmlFor="email" className="text-left">
        Email
      </label>
      <input id="email" type="text" className="border-slate-300 border-2" />
      <label htmlFor="password" className="text-left">
        Password
      </label>
      <input type="password" className="border-slate-300 border-2 mb-2" />
      <Button
        text={buttonText}
        classProps="col-span-2 font-display text-lg"></Button>
      <Button
        text="Cancel"
        classProps="col-span-2 font-display text-lg"></Button>
    </form>
  )
}
