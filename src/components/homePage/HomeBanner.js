import React from "react"
import {
  Banner,
  BannerTitle,
  Canvas,
  Headline,
  Video,
} from "../../styles/homeStyles"

const HomeBanner = () => {
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
