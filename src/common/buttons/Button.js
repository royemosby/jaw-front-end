import { buttonStyles as styles } from './Button'

export function Button({
  text,
  classProps = '',
  action = () => {
    console.log('Button not wired')
  },
  disabled = false,
}) {
  const disabledStyles = () => {
    return disabled ? 'text-slate-500 italic' : ''
  }
  const buttonStyles = () => {
    return `${styles} ${classProps} ${disabledStyles()}`
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={buttonStyles()}
      title={disabled ? 'This button is disabled' : ''}
      onClick={(evt) => action(evt)}>
      {text}
    </button>
  )
}

export const buttonStyles =
  'm-0.5 bg-slate-300 p-0.5 rounded-sm  w-full bg-opacity-10 text-white'
