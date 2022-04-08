import { UserForm } from './UserForm'

export function EditUser() {
  return (
    <div className="border-4 border-slate-400 p-2">
      <h2 className="font-display text-2xl">Edit Account Info</h2>
      <UserForm></UserForm>
    </div>
  )
}
