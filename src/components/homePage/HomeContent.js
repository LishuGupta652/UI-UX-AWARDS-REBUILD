import React from "react"
import { Container } from "../../styles/globalStyles"
import { Content, HomeContentSection } from "../../styles/homeStyles"

const HomeContent = () => {
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
