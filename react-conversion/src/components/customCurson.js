import React, { useEffect, useState } from "react"
import { useGlobalState } from "../context/globalContext"
import { Cursor } from "../styles/globalStyles"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalState()
  const [mousePosition, setMousePosition] = useState({
    x: 200,
    y: 200,
  })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  })

  return (
    <>
      <Cursor
        className={` ${cursorType} ${toggleMenu ? "nav-open" : ""}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </>
  )
}

export default CustomCursor
