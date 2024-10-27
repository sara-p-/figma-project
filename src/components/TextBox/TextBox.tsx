// import { MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import { ReactNode, useRef } from 'react'
import './TextBox.css'

type textProps = {
  classes?: string[]
  resize?: boolean
  children?: ReactNode
}

function TextBox({ classes, resize = false, children }: textProps) {
  const boxRef = useRef<HTMLDivElement>(null)

  // Set the classes based on the props
  const theClasses: string[] = classes?.length
    ? ['text-box', ...classes]
    : ['text-box']

  return (
    <div ref={boxRef} className={theClasses.join(' ')}>
      {resize && (
        <>
          <button className='corner top-left'></button>
          <button className='corner top-right'></button>
        </>
      )}
      <div className='text-wrapper'>{children}</div>

      {resize && (
        <>
          <button className='corner bottom-right'></button>
          <button className='corner bottom-left'></button>
        </>
      )}
    </div>
  )
}

export default TextBox
