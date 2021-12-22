import React from "react"
import { HeaderNav } from "../styles/headerStyles"

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex>
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
