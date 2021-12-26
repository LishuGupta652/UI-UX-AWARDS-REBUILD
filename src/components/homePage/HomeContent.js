import { useAnimation } from "framer-motion"
import React from "react"
import { useInView } from "react-intersection-observer"
import { Container } from "../../styles/globalStyles"
import { Content, HomeContentSection } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-300px",
  })
  return (
    <HomeContentSection>
      <Container>
        <Content>
          Great stories don’t just happen— <br /> they need to be uncovered. And
          we dig deep to discover the great stories that lie just below the
          surface. Dirt under our fingernails and all.
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
