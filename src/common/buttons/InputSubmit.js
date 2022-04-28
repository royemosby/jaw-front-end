import { buttonStyles as styles } from './Button'

export function InputSubmit({ submit, text = 'Submit' }) {
  return (
    <input
      className={`${styles} cursor-pointer`}
      type="submit"
      onSubmit={(e) => submit(e)}
      value={text}
    />
  )
}
