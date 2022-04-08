import { Link } from 'react-router-dom'

import { buttonStyles as styles } from './buttons/Button'

export function Nav() {
  return (
    <ul>
      <Link to="/login" className={styles}>
        Login
      </Link>
      <Link to="/" className={styles}>
        Jobs
      </Link>
      <Link to="/contacts" className={styles}>
        Contacts
      </Link>
      <Link to="/user" className={styles}>
        User
      </Link>
      <Link to="/x" className={styles}>
        _New Contact
      </Link>
      <Link to="/y" className={styles}>
        _Edit Contact
      </Link>
    </ul>
  )
}
