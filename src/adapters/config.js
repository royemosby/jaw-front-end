import { store } from '../store'

const jwt = () => {
  const state = store.getState()
  return state.user.jwt
}

export const url = {
  base: process.env.REACT_APP_API_URL,
}
url.contacts = `${url.base}/contacts`
url.login = `${url.base}/login`
url.jobs = `${url.base}/jobs`
url.users = `${url.base}/users`

export function authConfig(body = {}) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  }
}

export function getConfig() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${jwt()}`,
    },
  }
}

export function postConfig(body = {}) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${jwt()}`,
    },
    body: JSON.stringify(body),
  }
}

export function putConfig(body = {}) {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${jwt()}`,
    },
    body: JSON.stringify(body),
  }
}

export function deleteConfig() {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${jwt()}`,
    },
  }
}
