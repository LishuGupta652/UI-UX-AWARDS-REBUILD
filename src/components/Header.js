import React from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav } from "../styles/headerStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex>
          header
          {/* <Logo>lishu</Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu> */}
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
