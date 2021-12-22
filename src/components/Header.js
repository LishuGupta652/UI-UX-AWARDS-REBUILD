import React from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>lishu</Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
