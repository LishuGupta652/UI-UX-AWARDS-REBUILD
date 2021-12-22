import React, { useEffect, useState } from "react"
import { Cursor } from "../styles/globalStyles"

const CustomCursor = () => {
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
      <Cursor />
    </>
  )
}

export default CustomCursor
