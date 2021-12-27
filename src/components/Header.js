import { Link } from "gatsby"
import React, { useEffect, useRef } from "react"
import { Container, Flex } from "../styles/globalStyles"
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
// Context
import { useGlobalState, useGlobalDispatch } from "../context/globalContext"
import useElementPosition from "../context/useElementPosition"

// Custom Hook

const Header = ({
  onCursor,
  toggleMenu,
  setToggleMenu,
  hamburgerPosition,
  setHamburgerPosition,
}) => {
  const dispatch = useGlobalDispatch()
  const { currentTheme } = useGlobalState()
  const hamburger = useRef()
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const MenuHover = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y })
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
          <Menu
            ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
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
