import { Link } from "gatsby"
import React, { useEffect } from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
// Context
import { useGlobalState, useGlobalDispatch } from "../context/globalContext"

const Header = () => {
  const dispatch = useGlobalDispatch()
  const { currentTheme } = useGlobalState()
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">GITM</Link>
            <span onClick={toggleTheme}></span>
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
