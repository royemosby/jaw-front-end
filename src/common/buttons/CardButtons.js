import { Button } from './Button'
import { Link } from 'react-router-dom'
import { buttonStyles as styles } from './Button'

export function CardButtons({ route, resourceId }) {
  return (
    <div className="flex">
      <Link
        className={styles}
        to={resourceId ? `/${route}/${resourceId}` : '/invalid'}>
        Open
      </Link>
      <Link
        className={styles}
        to={resourceId ? `/${route}/${resourceId}/edit` : '/invalid/edit'}>
        Edit
      </Link>
    </div>
  )
}
