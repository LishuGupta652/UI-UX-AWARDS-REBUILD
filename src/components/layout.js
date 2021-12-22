import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/// Styled Components
import { createGlobalStyle } from "styled-components"
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

  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
