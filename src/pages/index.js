import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  GiGrapes,
  GiSeedling
} from 'react-icons/gi'
import theme from '../theme'
import { getIsMobile } from '../utils'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID } from '../constants'
import IconItem from '../components/IconItem'
import ExternalLink from '../components/ExternalLink'
import withRefreshOnResize from '../components/withRefreshOnResize'
import TmNavBar from '../tmComponents/TmNavBar'
import TmiLogo from '../tmComponents/TmiLogo'
import TmHead from '../tmComponents/TmHead'
import Contacts from '../tmComponents/Contacts'
import Meetings from '../tmComponents/Meetings'
import Education from '../tmComponents/Education'

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
`

const StyledAboutUl = styled.ul`
  ${theme.media.desktop`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 24px;
    padding-bottom: 12px;
    li: first-child {
      justify-self: flex-end;
    }
    li: last-child {
      justify-self: flex-start;
    }
  `};
`
// todo break into smaller parts
const LandingPage = ({
  data: {
    file,
    allMarkdownRemark: { edges: [{ node: { frontmatter } }] }
  }
}) => {
  const isDesktop = !getIsMobile()
  return (
    <React.Fragment>
      <TmHead {...frontmatter.head} />
      <TmNavBar isLanding />
      <div id={SECTION_ID.HOME} />
      <Hero
        backgroundImage={file && file.childImageSharp.fluid}
        continueToId={SECTION_ID.EDUCATION}
      >
        <StyledH1>
          {frontmatter.hero.h1}
        </StyledH1>
      </Hero>
      <Section id={SECTION_ID.EDUCATION} title={frontmatter.menu.education} pb="24px">
        <Education isDesktop={isDesktop} />
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
      <Section id={SECTION_ID.MEETINGS} title={frontmatter.menu.meetings} pb="12px">
        <Meetings />
      </Section>
      <Section id={SECTION_ID.CONTACT} title={frontmatter.menu.contact} hasDarkBackground>
        <Contacts />
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
              keywords
              imageUrl
              websiteUrl
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
            aboutSection {
              label1part1
              link
              label2
              label3
            }
          }
        }
      }
    }
  }
`

export default withRefreshOnResize(LandingPage)
