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
        Podstatou nášho klubu je vzdelávanie.
        Rozvíjaj a zdokonaľuj svoje komunikačné a líderské zručnosti v bezpečnom a podpornom
        prostredí nášho klubu prácou na projektoch,
        ktoré Ti umožnia budovať zručnosti použiteľné v bežnom živote.
        Uč sa vlastným tempom na základe princípov,
        ktoré sa uplatňujú v Toastmasters Internetional od jeho založenia v roku 1924 a:
      </Text.S>
      <Text.S>
        <div>
          <ul>
            <li>
              - nauč sa rečniť na verejnosti
            </li>
            <li>
              - buduj svoje líderské zručnosti
            </li>
            <li>
              - maximalizuj svoj potenciál
            </li>
            <li>
              - rozvíjaj svoju sieť kontaktov
            </li>
            <li>
              - získaj konkurenčnú výhodu v povolaní
            </li>
            <li>
              - buduj sebadôveru a sebauvedomenie
            </li>
          </ul>
        </div>
      </Text.S>
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
        <ul>
          <li>
          ... je súčasťou Toastmasters International
          </li>
          <li>
          ... má 4 roky
          </li>
          <li>
          ... už zorganizoval vyše 150 akcií
          </li>
        </ul>
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
        <ul>
          <li>
            osobne na stretnutiach klubu
          </li>
          <li>
            emailom na: toastmasters.kosice@gmail.com
          </li>
          <li>
            správou na Facebooku
          </li>
        </ul>
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
