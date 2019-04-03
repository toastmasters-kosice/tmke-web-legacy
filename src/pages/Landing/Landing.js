import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import { H1 } from '../../components/Typography'
import Hero from '../../components/Hero'
import theme from '../../theme'
import { SECTION_ID, routes } from '../../constants'

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
`

const Landing = ({ data }) => (
  <Wrapper>
    <NavBar />
    <Hero
      backgroundUrl={data.file && data.file.childImageSharp.fluid}
      continueTo={routes.EDUCATION}
    >
      <StyledH1>
        Tvorime recnikov a lidrov
      </StyledH1>
    </Hero>
    <div id={SECTION_ID.EDUCATION}>
      <H1>{SECTION_ID.EDUCATION}</H1>
    </div>
    <div id={SECTION_ID.ABOUT}>
      <H1>{SECTION_ID.ABOUT}</H1>
    </div>
    <div id={SECTION_ID.MEETINGS}>
      <H1>{SECTION_ID.MEETINGS}</H1>
    </div>
    <div id={SECTION_ID.CONTACT}>
      <H1>{SECTION_ID.CONTACT}</H1>
    </div>
  </Wrapper>
)

Landing.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  })
}

export default Landing
