import logo from '../wrangler.svg'
import { Button } from '../common/buttons/Button'

export function Login() {
  return (
    <div className="border-4 border-slate-400 p-2">
      <div className="w-60 self-center m-auto">
        <img src={logo} />
      </div>
      <div>
        <h2 className="font-display mb-2 text-2xl">Log in to Job Application Wrangler</h2>
        <form action="" className="grid grid-cols-form gap-1 mb-4">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="border-slate-300 border-2" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" className="border-slate-300 border-2 mb-2" />
          <Button text="Login" classProps="col-span-2 font-display text-lg"></Button>
        </form>
        <Button text="Or Create New Account" classProps="font-display text-lg"></Button>
      </div>
    </div>
  )
}
