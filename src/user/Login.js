import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../wrangler.svg'
import { buttonStyles } from '../common/buttons/Button'
import { url, authConfig } from '../adapters/config'
import { setUser, setUserMessage } from '../user/userSlice'

export function Login() {
  //TODO: clear out default prop state after dev
  const [username, setUsername] = useState('test')
  const [password, setPassword] = useState('test')

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetch(url.login, authConfig({ username, password }))
      .then((resp) => {
        return resp.json()
      })
      .then((resp) => {
        if (resp.message && resp.message === 'Invalid username or password') {
          dispatch(setUserMessage(resp))
        } else {
          dispatch(setUser(resp))
        }
        setUsername('')
        setPassword('')
      })
      .catch((e) => console.dir(e))
  }

  return (
    <div className="border-4 border-slate-400 p-2">
      <div className="w-60 self-center m-auto">
        <img src={logo} alt="Job Application Wrangler logo" />
      </div>
      <div>
        <h2 className="font-display mb-2 text-2xl">
          Log in to Job Application Wrangler
        </h2>
        {user.message ? <h3 className="text-red-500">{user.message}</h3> : null}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-form gap-1 mb-4">
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
            className="col-span-2 font-display text-lg  mb-0.5 bg-slate-300 p-0.5 rounded-sm  w-full bg-opacity-10 text-white"
            value="Log in"
          />
        </form>
        <Link
          to="/user/new"
          className={`${buttonStyles} text-lg font-display w-full m-0.5 rounded-sm`}>
          or Create New Account
        </Link>
      </div>
    </div>
  )
}
