import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  GiAura,
  GiEnvelope,
  GiFireworkRocket,
  GiGrapes,
  GiHangGlider,
  GiLaurelsTrophy,
  GiPublicSpeaker,
  GiSeedling,
  GiShakingHands,
  GiSpiderWeb,
  GiWireframeGlobe
} from 'react-icons/gi'
import { FaFacebookMessenger } from 'react-icons/fa'
import theme from '../theme'
import NavBar from '../components/NavBar'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID, routes } from '../constants'
import ListIconItem from '../components/ListIconItem'
import IconItem from '../components/IconItem'

const Wrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
`

const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
`

const LandingPage = ({ data }) => (
  <Wrapper>
    <NavBar />
    <Hero
      backgroundImage={data.file && data.file.childImageSharp.fluid}
      continueTo={routes.EDUCATION}
    >
      <StyledH1>
        Tvoríme rečníkov a lídrov
      </StyledH1>
    </Hero>
    <Section
      id={SECTION_ID.EDUCATION}
      title="Vzdelávanie"
    >
      <Text.S>
        Rozvíjaj a zdokonaľuj svoje zručnosti v bezpečnom a podpornom
        prostredí nášho klubu. Uč sa vlastným tempom na základe princípov,
        ktoré sa uplatňujú v Toastmasters International od jeho založenia v roku 1924 a:
      </Text.S>
      <ul>
        <li>
          <ListIconItem iconComp={GiPublicSpeaker} text="nauč sa rečniť na verejnosti" />
        </li>
        <li>
          <ListIconItem iconComp={GiAura} text="buduj svoje líderské zručnosti" />
        </li>
        <li>
          <ListIconItem iconComp={GiLaurelsTrophy} text="maximalizuj svoj potenciál" />
        </li>
        <li>
          <ListIconItem iconComp={GiSpiderWeb} text="rozvíjaj svoju sieť kontaktov" />
        </li>
        <li>
          <ListIconItem iconComp={GiFireworkRocket} text="získaj konkurenčnú výhodu v povolaní" />
        </li>
        <li>
          <ListIconItem iconComp={GiHangGlider} text="buduj sebadôveru a sebauvedomenie" />
        </li>
      </ul>
      <Text.S>
        So vzdelávacím systémom Pathways vieš získať vyše 300 unikátnych zručností.
        Aplikuj poznatky na pravidelných stretnutiach a dostaň ich do krvi.
      </Text.S>
    </Section>
    <Section id={SECTION_ID.ABOUT} title="O nás" hasDarkBackground>
      <Text.S>
        Sme rečnícky klub mladých ľudí, ktorý...
      </Text.S>
      <AboutUsWrapper>
        <IconItem
          iconComp={GiWireframeGlobe}
          text="... je súčasťou Toastmasters International"
        />
        <IconItem
          iconComp={GiSeedling}
          text="... má 4 roky"
        />
        <IconItem
          iconComp={GiGrapes}
          text="... už zorganizoval vyše 150 akcií"
        />
      </AboutUsWrapper>
    </Section>
    <Section id={SECTION_ID.MEETINGS} title="Navštív nás">
      <Text.S>
        Na našich vzdelávacích stretnutiach si môžeš pozrieť, ako
        funguje výukový proces a zadarmo vyskúšať základné roly.
      </Text.S>
    </Section>
    <Section id={SECTION_ID.CONTACT} title="Kontakt" hasDarkBackground>
      <Text.S>
        <ul>
          <li>
            <ListIconItem iconComp={GiShakingHands} text="osobne na stretnutiach klubu" />
          </li>
          <li>
            <a href={`mailto:${'toastmasters.kosice@gmail.com'}`}>
              <ListIconItem iconComp={GiEnvelope} text="toastmasters.kosice@gmail.com" />
            </a>
          </li>
          <li>
            <a href="https://msng.link/fm/toastmasters.kosice">
              <ListIconItem iconComp={FaFacebookMessenger} text="správou na Facebooku" />
            </a>
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
