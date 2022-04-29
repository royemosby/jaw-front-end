import { Link } from 'react-router-dom'
import { buttonStyles as styles, Button } from './Button'

export function DetailsButtons({
  route,
  resourceId,
  handleDelete,
  disabled = false,
}) {
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
      <Button text="Delete" action={handleDelete} disabled={disabled}></Button>
    </div>
  )
}
