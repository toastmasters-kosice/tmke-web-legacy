import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import { H1, Text } from '../../components/Typography'
import Hero from '../../components/Hero'
import theme from '../../theme'
import { SECTION_ID, routes } from '../../constants'
import Education from './Education'
import Section from '../../components/Section'

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
    <Education id={SECTION_ID.EDUCATION} />
    <Section id={SECTION_ID.ABOUT} title={SECTION_ID.ABOUT} hasDarkBackground>
      <Text.S>
        aljdflka fdlaj lasjf adflja;l jfa;sldjf asdljfa;lsf;alsd jfasldjf ljdf
        ;lajoerfiahga;fnc,vnbkaljfdghanv
      </Text.S>
    </Section>
    <Section id={SECTION_ID.MEETINGS} title={SECTION_ID.MEETINGS}>
      <Text.S>
        aljdflka fdlaj lasjf adflja;l jfa;sldjf asdljfa;lsf;alsd jfasldjf ljdf
        ;lajoerfiahga;fnc,vnbkaljfdghanv
      </Text.S>
    </Section>
    <Section id={SECTION_ID.CONTACT} title={SECTION_ID.CONTACT} hasDarkBackground>
      <Text.S>
        aljdflka fdlaj lasjf adflja;l jfa;sldjf asdljfa;lsf;alsd jfasldjf ljdf
        ;lajoerfiahga;fnc,vnbkaljfdghanv
      </Text.S>
    </Section>
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
