// import { MouseEventHandler, ReactNode, useEffect, useState } from 'react'
import { MouseEvent, ReactNode, useRef, useState } from 'react'
import './TextBox.css'

type textProps = {
  initialWidth: number
  initialHeight: number
  classes?: string[]
  resize?: boolean
  children?: ReactNode
}

function TextBox({
  initialWidth,
  initialHeight,
  classes,
  // resize = false,
  children,
}: textProps) {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [isResizing, setIsResizing] = useState<boolean>(false)
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: initialWidth,
    height: initialHeight,
  })
  const boxRef = useRef<HTMLDivElement>(null)

  // Set the classes based on the props
  const theClasses: string[] = classes?.length
    ? ['text-box', ...classes]
    : ['text-box']

  function handleMouseDown(e: MouseEvent<HTMLDivElement>): void {
    setIsDragging(true)
    const offsetX = e.clientX - boxRef.current!.offsetLeft
    const offsetY = e.clientY - boxRef.current!.offsetTop
    setPosition({ x: offsetX, y: offsetY })
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (isDragging) {
      const newX = e.clientX - position.x
      const newY = e.clientY - position.y
      setPosition({ x: newX, y: newY })
    } else if (isResizing) {
      const newWidth = e.clientX - boxRef.current!.offsetLeft
      const newHeight = e.clientY - boxRef.current!.offsetTop
      setSize({ width: newWidth, height: newHeight })
    }
  }

  function handleMouseUp(): void {
    setIsDragging(false)
    setIsResizing(false)
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        border: '1px solid black',
        cursor: isResizing ? 'se-resize' : 'move',
      }}
      ref={boxRef}
      className={theClasses.join(' ')}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* {resize && (
        <>
          <button className='corner top-left'></button>
          <button className='corner top-right'></button>
        </>
      )} */}
      <div className='text-wrapper'>{children}</div>
      <button
        className='corner bottom-right'
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 10,
          height: 10,
          cursor: 'se-resize',
        }}
        onMouseDown={() => setIsResizing(true)}
      ></button>
      {/* {resize && (
        <>
          <button className='corner bottom-left'></button>
        </>
      )} */}
    </div>
  )
}

export default TextBox
