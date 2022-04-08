import { store } from '../index.js'
const url = {
  base: process.env.REACT_APP_API_URL,
}
url.contacts = `${url.base}/contacts`
url.login = `${url.base}/login`
url.jobs = `${url.base}/jobs`
url.users = `${url.base}/users`
