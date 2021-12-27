import React from "react"
import { Container } from "../styles/globalStyles"

const Footer = () => {
  return (
    <FooterNav>
      <Container>
        <Flex>
          <FooterContent>
            <p>810.98.68.534</p>
            <p>lishugupta652@gmail.com</p>
          </FooterContent>
          <FooterContent>
            <p>Indore MP</p>
            <p>Lishu gupta : lishu.ml</p>
          </FooterContent>
          <FooterSocial></FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
