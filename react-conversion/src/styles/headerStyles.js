import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`
export const Logo = styled.nav`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }

  span {
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme.red};
    margin: 0 4px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`
export const Menu = styled.nav`
  button {
    tranform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 6px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`
