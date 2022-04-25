import { Button, buttonStyles } from './buttons/Button'
export function DeleteDialog({
  text = 'Dialog text is not set',
  title = 'title is not set',
  cancelHandler,
  confirmHandler,
}) {
  const handleSubmit = (e) => {
    console.log(e.target.value)
  }
  return (
    <>
      <div className="bg-slate-400/50 h-screen w-screen absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 backdrop-blur-sm"></div>
      <div className="bg-slate-900 text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 p-4 min-w-full">
        <h1 className="text-3xl">{title}</h1>
        <p>{text}</p>
        <form action="handleSubmit" className="flex">
          <Button action={confirmHandler} text="Confirm Delete"></Button>
          <Button action={cancelHandler} text="Cancel"></Button>
        </form>
      </div>
    </>
  )
}
