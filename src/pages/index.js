import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import theme from '../theme'
import { getIsMobile } from '../utils'
import { H1 } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID } from '../constants'
import withRefreshOnResize from '../components/withRefreshOnResize'
import TmNavBar from '../tmComponents/TmNavBar'
import TmHead from '../tmComponents/TmHead'
import Contacts from '../tmComponents/Contacts'
import Meetings from '../tmComponents/Meetings'
import Education from '../tmComponents/Education'
import About from '../tmComponents/About'

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
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
        <About isDesktop={isDesktop} />
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
          }
        }
      }
    }
  }
`

export default withRefreshOnResize(LandingPage)
