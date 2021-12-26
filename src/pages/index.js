import React from "react"
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from "../components/homePage/HomeContent"
import HomeFeatured from "../components/homePage/HomeFeatured"
import Layout from "../components/layout"
import { useGlobalDispatch, useGlobalState } from "../context/globalContext"

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalState()
  const dispatch = useGlobalDispatch()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || "false"

    dispatch({ type: "CURSOR_TYPE", cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
