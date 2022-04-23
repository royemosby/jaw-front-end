import { Link } from 'react-router-dom'
import { buttonStyles as styles } from './Button'

export function DetailsButtons({ route, resourceId }) {
  return (
    <div className="flex">
      <Link
        className={styles}
        to={resourceId ? `/${route}/${resourceId}/edit` : '/resource/edit'}>
        Edit
      </Link>
      <Link className={styles} to={resourceId ? `/${route}` : '/resource'}>
        Close
      </Link>
      <Link
        /*TODO: this is going to have to be a POST resource or trigger a confirmation dialog*/
        className={styles}
        to={resourceId ? `/${route}/${resourceId}/delete` : '/resource/delete'}>
        Delete
      </Link>
    </div>
  )
}
