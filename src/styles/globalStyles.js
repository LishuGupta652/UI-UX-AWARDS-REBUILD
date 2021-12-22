import styled from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    `
    padding: 0;
    margin: 0;
    max-width: 100%;
  `}
`
