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

export function getConfig(jwt) {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }
}
