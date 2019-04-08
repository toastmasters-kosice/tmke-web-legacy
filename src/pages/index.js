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
import theme, { getIsMobile } from '../theme'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID, routes } from '../constants'
import ListIconItem from '../components/ListIconItem'
import IconItem from '../components/IconItem'
import ExternalLink from '../components/ExternalLink'
import TmNavBar from '../tmComponents/TmNavBar'
import TmiLogo from '../tmComponents/TmiLogo'
import Head from '../tmComponents/Head'

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

const LandingPage = ({
  data: {
    file,
    allMarkdownRemark: { edges: [{ node: { frontmatter } }] }
  }
}) => {
  const isDesktop = !getIsMobile()

  return (
    <React.Fragment>
      <Head {...frontmatter.head} />
      <TmNavBar />
      <div id={SECTION_ID.HOME} />
      <Hero
        backgroundImage={file && file.childImageSharp.fluid}
        continueTo={routes.EDUCATION}
      >
        <StyledH1>
          {frontmatter.hero.h1}
        </StyledH1>
      </Hero>
      <Section id={SECTION_ID.EDUCATION} title={frontmatter.menu.education} pb="24px">
        {isDesktop && (
          <SectionWrapper>
            <Text.S>{frontmatter.educationSection.description}</Text.S>
          </SectionWrapper>)
        }
        <StyledEduUl>
          <li>
            <ListIconItem
              iconComp={GiPublicSpeaker}
              text={frontmatter.educationSection.label1}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiAura}
              text={frontmatter.educationSection.label2}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiLaurelsTrophy}
              text={frontmatter.educationSection.label3}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiSpiderWeb}
              text={frontmatter.educationSection.label4}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiFireworkRocket}
              text={frontmatter.educationSection.label5}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiHangGlider}
              text={frontmatter.educationSection.label6}
              isBig={isDesktop}
            />
          </li>
        </StyledEduUl>
        <Text.S>
          {frontmatter.educationSection.final}
        </Text.S>
      </Section>
      <Section id={SECTION_ID.ABOUT} title={frontmatter.menu.about} hasDarkBackground>
        <StyledAboutUl>
          <li>
            <IconItem
              iconComp={TmiLogo}
              isBig={isDesktop}
              text={
                <span>
                  {frontmatter.aboutSection.label1part1}
                  &nbsp;
                  <ExternalLink
                    to="https://www.toastmasters.org/"
                    textComp={isDesktop ? Text.M : Text.S}
                  >
                    {frontmatter.aboutSection.link}
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
              text={frontmatter.aboutSection.label2}
            />
          </li>
          <li>
            <IconItem
              iconComp={GiGrapes}
              isBig={isDesktop}
              text={frontmatter.aboutSection.label3}
            />
          </li>
        </StyledAboutUl>
      </Section>
      <Section id={SECTION_ID.MEETINGS} title={frontmatter.menu.meetings} pb="24px">
        <Text.S>{frontmatter.meetingsSection.description}</Text.S>
      </Section>
      <Section id={SECTION_ID.CONTACT} title={frontmatter.menu.contact} hasDarkBackground>
        <StyledContactUl>
          <li>
            <ListIconItem
              iconComp={GiShakingHands}
              text={frontmatter.contactSection.label1}
            />
          </li>
          <li>
            <a href={`mailto:${frontmatter.contactSection.email}`}>
              <ListIconItem
                iconComp={GiEnvelope}
                text={frontmatter.contactSection.label2}
                isBold
              />
            </a>
          </li>
          <li>
            <a href="https://msng.link/fm/toastmasters.kosice">
              <ListIconItem
                iconComp={FaFacebookMessenger}
                text={frontmatter.contactSection.label3}
                isBold
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/toastmasters.kosice/">
              <ListIconItem
                iconComp={FaFacebook}
                text={frontmatter.contactSection.label4}
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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            head {
              title
              description
              imageUrl
            }
            hero {
              h1
            }
            menu {
              education
              about
              meetings
              contact
            }
            educationSection {
              description
              label1
              label2
              label3
              label4
              label5
              label6
              final
            }
            aboutSection {
              label1part1
              link
              label2
              label3
            }
            meetingsSection {
              description
            }
            contactSection {
              label1
              label2
              label3
              label4
            }
          }
        }
      }
    }
  }
`

export default LandingPage
