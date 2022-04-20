import { buttonStyles as styles } from './Button'

export function Button({
  text,
  classProps = '',
  action = () => {
    console.log('Button not wired')
  },
}) {
  const buttonStyles = () => {
    return `${styles} ${classProps}`
  }

  return (
    <button
      type="button"
      className={buttonStyles()}
      onClick={(evt) => action(evt)}>
      {text}
    </button>
  )
}

export const buttonStyles =
  'm-0.5 bg-slate-300 p-0.5 rounded-sm  w-full bg-opacity-10 text-white'
