import { UserForm } from './UserForm'

export function NewUser() {
  return (
    <div className="border-4 border-slate-400 p-2">
      <h2 className="font-display text-2xl">Create New Account</h2>
      <UserForm buttonText="Create Account"></UserForm>
    </div>
  )
}
