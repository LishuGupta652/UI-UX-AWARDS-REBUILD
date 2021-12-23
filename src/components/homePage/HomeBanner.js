import React, { useEffect, useRef } from "react"
import {
  Banner,
  BannerTitle,
  Canvas,
  Headline,
  Video,
} from "../../styles/homeStyles"

// Custom hooks
import useWindowSize from "../../hooks/useWindowSize"
import { useGlobalState } from "../../context/globalContext"

const HomeBanner = ({ onCursor }) => {
  const canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalState()

  console.log(size)
  useEffect(() => {
    let renderingElement = canvas.current
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode()
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")
    let lastX
    let lastY
    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", el => {
      moving = true
      lastX = el.pageX - renderingElement.offsetLeft
      lastY = el.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("click", el => {
      moving = true
      lastX = el.pageX - renderingElement.offsetLeft
      lastY = el.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", el => {
      moving = false
      lastX = el.pageX - renderingElement.offsetLeft
      lastY = el.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", el => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = el.pageX - renderingElement.offsetLeft
        let currentY = el.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 120
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          src={require("../../assets/video/video.mp4")}
          height="100%"
          width="100%"
          loop
          autoPlay
        />
      </Video>
      <Canvas
        ref={canvas}
        height={size.height}
        width={size.width}
        onMouseLeave={onCursor}
        onMouseEnter={() => onCursor("hovered")}
      />
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
