import { ChangeEvent, useId, useState } from 'react'
import './TextInput.css'

type inputProps = {
  label?: string
  text?: string
}

function TextInput({ label = 'Title', text = 'Hello Figma' }: inputProps) {
  const [title, setTitle] = useState<string | undefined>(text)
  const id = useId()
  const inputId: string = `input-${id}`

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setTitle(e.currentTarget.value)
  }

  return (
    <fieldset>
      <label htmlFor={inputId}>{label}</label>
      <input
        type='text'
        id={inputId}
        value={title}
        onChange={handleInputChange}
      ></input>
    </fieldset>
  )
}

export default TextInput
