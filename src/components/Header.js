import { Link } from "gatsby"
import React, { useEffect } from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
// Context
import { useGlobalState, useGlobalDispatch } from "../context/globalContext"

const Header = ({ onCursor }) => {
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
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ delay: 0.8 }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">GITM</Link>
            <span
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              onClick={toggleTheme}
            ></span>
            <Link
              to="/"
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              N
            </Link>
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
