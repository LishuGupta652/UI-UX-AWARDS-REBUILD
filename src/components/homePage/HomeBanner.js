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

const HomeBanner = () => {
  const canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalState()

  console.log(size)
  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let renderingCtx = renderingElement.getContext("2d")
    let drawingCtx = drawingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)
  }, [currentTheme])

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
      <Canvas ref={canvas} height={size.height} width={size.width} />
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
