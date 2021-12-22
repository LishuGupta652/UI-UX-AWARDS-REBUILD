import React, { useEffect, useRef } from "react"
import {
  Banner,
  BannerTitle,
  Canvas,
  Headline,
  Video,
} from "../../styles/homeStyles"

const HomeBanner = () => {
  const canvas = useRef(null)

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let renderingCtx = renderingElement.getContext("2d")
    let drawingCtx = drawingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
  }, [])

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
      <Canvas />
      <BannerTitle>
        <Headline>DIG</Headline>
        <Headline>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
