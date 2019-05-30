import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import { GiEnvelope, GiShakingHands } from 'react-icons/gi'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import ListIconItem from '../components/ListIconItem'
import ExternalLink from '../components/ExternalLink'
import theme from '../theme'

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            contactSection {
              email
              label1
              label2
              label3
              label4
              label5
            }
          }
        }
      }
    }
  }
`

const StyledContactUl = styled.ul`
  ${theme.media.desktop`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `};
`

const Contacts = () =>
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <StyledContactUl>
        <li>
          <ListIconItem
            iconComp={GiShakingHands}
            text={frontmatter.contactSection.label1}
            isBold
          />
        </li>
        <li>
          <ExternalLink to={`mailto:${frontmatter.contactSection.email}`}>
            <ListIconItem
              iconComp={GiEnvelope}
              text={frontmatter.contactSection.label2}
              isBold
            />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink to="https://www.facebook.com/toastmasters.kosice/">
            <ListIconItem
              iconComp={FaFacebook}
              text={frontmatter.contactSection.label3}
              isBold
            />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink to="https://www.instagram.com/p/BekK6pthQ-s/">
            <ListIconItem
              iconComp={FaInstagram}
              text={frontmatter.contactSection.label4}
              isBold
            />
          </ExternalLink>
        </li>
        <li>
          <ExternalLink to="https://www.youtube.com/channel/UCUcc-5LcSzXbgEFkpNsiLXw">
            <ListIconItem
              iconComp={FaYoutube}
              text={frontmatter.contactSection.label5}
              isBold
            />
          </ExternalLink>
        </li>
      </StyledContactUl>
    )}
  />

export default Contacts
