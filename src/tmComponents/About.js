import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  GiGrapes,
  GiSeedling
} from 'react-icons/gi'
import { graphql, StaticQuery } from 'gatsby'
import { Text } from '../components/Typography'
import theme from '../theme'
import IconItem from '../components/IconItem'
import TmiLogo from './TmiLogo'
import ExternalLink from '../components/ExternalLink'

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

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
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

const About = ({ isDesktop }) =>
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
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
    )}
  />

About.propTypes = {
  isDesktop: PropTypes.bool.isRequired
}

export default About
