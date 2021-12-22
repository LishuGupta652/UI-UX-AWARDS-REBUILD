import { Link } from "gatsby"
import React from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"

import { useGlobalState } from "../context/globalContext"

const Header = () => {
  const { currentTheme } = useGlobalState()

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">GITM {currentTheme}</Link>
            <span></span>
            <Link to="/">N</Link>
          </Logo>
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
