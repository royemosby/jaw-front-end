import { useState } from 'react'
import logo from '../wrangler.svg'
import { Button } from '../common/buttons/Button'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(username, password)
  }
  return (
    <div className="border-4 border-slate-400 p-2">
      <div className="w-60 self-center m-auto">
        <img src={logo} />
      </div>
      <div>
        <h2 className="font-display mb-2 text-2xl">Log in to Job Application Wrangler</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-form gap-1 mb-4">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className="border-slate-300 border-2 text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="border-slate-300 border-2 mb-2 text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            className="col-span-2 font-display text-lg  m-0.5 bg-slate-300 p-0.5 rounded-sm  w-full bg-opacity-10 text-white"
            value="Log in"
          />
        </form>
        <Button text="Or Create New Account" classProps="font-display text-lg"></Button>
      </div>
    </div>
  )
}
