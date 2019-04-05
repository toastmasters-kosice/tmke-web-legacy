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
  GiSpiderWeb
} from 'react-icons/gi'
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import tmiLogo from '../images/tmi-logo.png'
import theme, { getIsMobile } from '../theme'
import NavBar from '../components/NavBar'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID, routes } from '../constants'
import ListIconItem from '../components/ListIconItem'
import IconItem from '../components/IconItem'
import Image from '../components/Image'
import ExternalLink from '../components/ExternalLink'

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
`

const SectionWrapper = styled.div`
  display: inline-block;
  width: 80%;
`

const StyledEduUl = styled.ul`
  ${theme.media.desktop`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 24px;
    li:nth-child(2n+1) {
      justify-self: flex-end;
    }
    padding: 24px 0;
  `};
`
const StyledAboutUl = styled.ul`
  ${theme.media.desktop`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 24px;
    padding-bottom: 24px;
    li: first-child {
      justify-self: flex-end;
    }
    li: last-child {
      justify-self: flex-start;
    }
  `};
`
const StyledContactUl = styled.ul`
  ${theme.media.desktop`
    display: flex;
    justify-content: center;
  `}
`

const LandingPage = ({ data }) => {
  const isDesktop = !getIsMobile()
  return (
    <React.Fragment>
      <NavBar />
      <div id={SECTION_ID.HOME} />
      <Hero
        backgroundImage={data.file && data.file.childImageSharp.fluid}
        continueTo={routes.EDUCATION}
      >
        <StyledH1>
          Tvoríme rečníkov a lídrov
        </StyledH1>
      </Hero>
      <Section id={SECTION_ID.EDUCATION} title="Vzdelávanie" pb="24px">
        {isDesktop && (
          <SectionWrapper>
            <Text.S>
              Rozvíjaj a zdokonaľuj svoje zručnosti v bezpečnom a podpornom
              prostredí nášho klubu. Uč sa vlastným tempom na základe princípov,
              ktoré sa uplatňujú v Toastmasters International od jeho založenia v roku 1924 a:
            </Text.S>
          </SectionWrapper>)
        }
        <StyledEduUl>
          <li>
            <ListIconItem
              iconComp={GiPublicSpeaker}
              text="nauč sa rečniť na verejnosti"
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiAura}
              text="buduj svoje líderské zručnosti"
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiLaurelsTrophy}
              text="maximalizuj svoj potenciál"
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiSpiderWeb}
              text="rozvíjaj svoju sieť kontaktov"
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiFireworkRocket}
              text="získaj konkurenčnú výhodu v povolaní"
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiHangGlider}
              text="buduj sebadôveru a sebauvedomenie"
              isBig={isDesktop}
            />
          </li>
        </StyledEduUl>
        <Text.S>
          So vzdelávacím systémom Pathways vieš získať vyše 300 unikátnych zručností.
          Aplikuj poznatky na pravidelných stretnutiach a dostaň ich do krvi.
        </Text.S>
      </Section>
      <Section id={SECTION_ID.ABOUT} title="O nás" hasDarkBackground>
        <StyledAboutUl>
          <li>
            <IconItem
              iconComp={({ size }) => <Image
                src={tmiLogo}
                alt="toastmasters international logo"
                size={size}
              />}
              isBig={isDesktop}
              text={
                <span>
                  Sme súčasťou&nbsp;
                  <ExternalLink
                    to="https://www.toastmasters.org/"
                    textComp={isDesktop ? Text.M : Text.S}
                  >
                    Toastmasters International
                  </ExternalLink>
                  .
                </span>
              }
            />
          </li>
          <li>
            <IconItem
              iconComp={GiSeedling}
              isBig={isDesktop}
              // Klub bol chartrovany 15.4.2015
              text="Náš klub má 4 roky."
            />
          </li>
          <li>
            <IconItem
              iconComp={GiGrapes}
              isBig={isDesktop}
              text="Zorganizovali sme už vyše 150 akcií."
            />
          </li>
        </StyledAboutUl>
      </Section>
      <Section id={SECTION_ID.MEETINGS} title="Stretnutia" pb="24px">
        <Text.S>
          Na našich vzdelávacích stretnutiach si môžeš pozrieť, ako
          funguje výukový proces a zadarmo vyskúšať základné roly.
        </Text.S>
      </Section>
      <Section id={SECTION_ID.CONTACT} title="Kontakt" hasDarkBackground>
        <StyledContactUl>
          <li>
            <ListIconItem iconComp={GiShakingHands} text="osobne na stretnutiach klubu" />
          </li>
          <li>
            <a href={`mailto:${'toastmasters.kosice@gmail.com'}`}>
              <ListIconItem
                iconComp={GiEnvelope}
                text="toastmasters.kosice@gmail.com"
                isBold
              />
            </a>
          </li>
          <li>
            <a href="https://msng.link/fm/toastmasters.kosice">
              <ListIconItem
                iconComp={FaFacebookMessenger}
                text="správou na Facebooku"
                isBold
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toastmasters.kosice/">
              <ListIconItem
                iconComp={FaFacebook}
                text="naša stránka na Facebooku"
                isBold
              />
            </a>
          </li>
        </StyledContactUl>
      </Section>
    </React.Fragment>
  )
}

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
