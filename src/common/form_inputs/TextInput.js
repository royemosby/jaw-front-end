export function TextInput({
  name,
  id,
  required = false,
  placeholder = '',
  value,
}) {
  return (
    <input
      type="text"
      id={id}
      name={name}
      className="text-black"
      required={required}
      placeholder={placeholder}
      value={value}
    />
  )
}
