import './TextArea.css'
import { ChangeEvent, useId, useState } from 'react'

type areaProps = {
  text?: string
}

function TextArea({ text = 'hello' }: areaProps) {
  const [areaText, setAreaText] = useState<string | undefined>(text)

  const id = useId()
  const textareaId = `textarea-${id}`

  function handleAreaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setAreaText(e.currentTarget.value)
  }

  return (
    <div className='textarea-box'>
      <div className='textarea-wrapper'>
        <textarea
          name='text-info'
          id={textareaId}
          value={areaText}
          onChange={handleAreaChange}
        ></textarea>
      </div>
    </div>
  )
}

export default TextArea
