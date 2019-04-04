import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import theme from '../theme'
import NavBar from '../components/NavBar'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID, routes } from '../constants'

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
`

const LandingPage = ({ data }) => (
  <Wrapper>
    <NavBar />
    <Hero
      backgroundUrl={data.file && data.file.childImageSharp.fluid}
      continueTo={routes.EDUCATION}
    >
      <StyledH1>
        Tvoríme rečníkov a lídrov
      </StyledH1>
    </Hero>
    <Section
      id={SECTION_ID.EDUCATION}
      title="Nauč sa spolu s nami"
    >
      <Text.S>
        So vzdelávacím systémom Pathways vieš získať vyše 300 unikátnych zručností.
      </Text.S>
      <Text.S>
        Aplikuj poznatky na pravidelných stretnutiach a dostaň ich do krvi.
      </Text.S>
    </Section>
    <Section id={SECTION_ID.ABOUT} title="Zoznámme sa" hasDarkBackground>
      <Text.S>
        Sme rečnícky klub mladých ľudí, ktorý...
      </Text.S>
      <Text.S>
        ...je súčasťou Toastmasters International
      </Text.S>
      <Text.S>
        ... má 4 roky
      </Text.S>
      <Text.S>
        ... už zorganizoval vyše 150 akcií
      </Text.S>
    </Section>
    <Section id={SECTION_ID.MEETINGS} title="Navštív nás">
      <Text.S>
        Na našich vzdelávacích stretnutiach si môžeš pozrieť, ako
        funguje výukový proces a zadarmo vyskúšať základné roly.
      </Text.S>
    </Section>
    <Section id={SECTION_ID.CONTACT} title="Kontaktuj nás" hasDarkBackground>
      <Text.S>
        osobne na stretnutiach klubu
      </Text.S>
      <Text.S>
        emailom na: toastmasters.kosice@gmail.com
      </Text.S>
      <Text.S>
        správou na Facebooku
      </Text.S>
    </Section>
  </Wrapper>
)

LandingPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  })
}

export const query = graphql`
  query {
    file(relativePath: { eq: "toast.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default LandingPage
