import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { buttonStyles as styles } from './buttons/Button'

export function Nav() {
  const user = useSelector((state) => state.user)
  const protectedLinks = () => {
    if (user.jwt) {
      return (
        <>
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
        </>
      )
    }
  }

  return <ul>{protectedLinks()}</ul>
}
