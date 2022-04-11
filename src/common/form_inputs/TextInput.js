export function TextInput({ name, id, required = false, placeholder = '' }) {
  return <input type="text" id={id} name={name} className="text-black" required={required} placeholder={placeholder} />
}
