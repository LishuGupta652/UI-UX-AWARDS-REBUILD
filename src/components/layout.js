import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/// Styled Components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
${Normalize}
  * {
    text-decoration: none;
    // curson: none;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body{
    font-family: Roboto,sans-serif;
    background:  #fff;
    overscroll-behavior: none;
    overflow-x: none;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "#000",
    text: "#fff",
  }
  const lightTheme = {
    background: "#fff",
    text: "#000",
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
