import { buttonStyles as styles } from './Button'

export function InputSubmit({ text = 'Submit' }) {
  //submit actions happen on the form
  return (
    <input className={`${styles} cursor-pointer`} type="submit" value={text} />
  )
}
