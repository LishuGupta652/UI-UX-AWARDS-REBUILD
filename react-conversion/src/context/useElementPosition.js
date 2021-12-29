import { useEffect } from "react"
import { useState } from "react"

export default function useElementPosition(el) {
  function getElement(x, y) {
    return {
      x,
      y,
    }
  }

  const [elementPosition, setElementPosition] = useState(getElement())

  useEffect(() => {
    function handlePosition() {
      let element = el.current
      let x =
        element.getBoundingClientRect().left +
        document.documentElement.scrollLeft +
        element.offsetWidth / 2
      let y =
        element.getBoundingClientRect().top +
        document.documentElement.scrollTop +
        element.offsetHeight / 2
      setElementPosition(getElement(x, y))
    }

    handlePosition()
  }, [el])
  return elementPosition
}
