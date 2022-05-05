import { Button } from './Button'
import { InputSubmit } from './InputSubmit'

export function CreateButtons({ handleCancel, inputText = 'Submit' }) {
  return (
    <div className=" col-span-2 flex">
      <InputSubmit text={inputText} />
      <Button text="Cancel" action={handleCancel}></Button>
    </div>
  )
}
