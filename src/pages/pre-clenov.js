import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import slugify from 'slugify'
import theme from '../theme'
import { NAVIGATION_HEIGHT } from '../constants'
import Section from '../components/Section'
import withRefreshOnResize from '../components/withRefreshOnResize'
import Head from '../tmComponents/Head'
import Navigation from '../tmComponents/Navigation'
import LeaderRole from '../tmComponents/LeaderRole'
import InterestingLinks from '../tmComponents/InterestingLinks'

const MenuPlaceholder = styled.div`
  height: ${NAVIGATION_HEIGHT}px;
`
const RolesWrapper = styled.div`
  ${theme.media.desktop`
    display: flex;
    flex-wrap: wrap;
    & div {
      width: 50%;
      padding: 12px 24px;
    }
    div:nth-child(2n+1) {
      justify-content: flex-end;
      text-align: right;
    }
    div:nth-child(2n) {
      text-align: left;
    }
    ${({ count }) => (count % 2 === 1) && `
      div:last-child {
        width: 100%;
        text-align: center;
        justify-content: center;
      }
    `}
  `}
`

const Announcements = styled.div`
  h2, h3 {
    font-weight: lighter;
    font-family: ${theme.fontFamily.MONSERRAT};
  }
  h2 {
    font-size: ${theme.fontSize.H2}px;
    color: ${theme.colors.BURGUNDY};
    ${theme.media.desktop`
      padding: 24px 0 12px;
    `};
  }
  h3 {
    font-size: ${theme.fontSize.H3}px;
  }
  p, ul {
    font-family: ${theme.fontFamily.LATO};
    font-weight: lighter;
    font-size: ${theme.fontSize.M}px;
    margin-block-start: 12px;
    margin-block-end: 12px;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  p {
    display: block;
  }
  ul {
    padding-inline-start: 24px;
    text-align: center;
    display: inline-block;
  }
  li {
    font-size: ${theme.fontSize.M}px;
    list-style-type: disc;
    width: fit-content;
  }
  a {
    font-weight: bold;
  }
`

const ForMembersPage = ({
  data: {
    allMarkdownRemark: { edges: [{ node: { frontmatter, html } }] }
  }
}) => (
  <React.Fragment>
    <Head {...frontmatter.head} />
    <MenuPlaceholder />
    <Navigation />
    <Section hasDarkBackground pb="12px">
      <Announcements dangerouslySetInnerHTML={{ __html: html }} />
    </Section>
    <Section title={frontmatter.forMembers.leadersTitle} pb="12px">
      <RolesWrapper count={frontmatter.forMembers.roles.length}>
        {frontmatter.forMembers.roles.map(role => (
          <LeaderRole key={slugify(role)}>
            {role}
          </LeaderRole>
        ))}
      </RolesWrapper>
    </Section>
    <Section title={frontmatter.forMembers.interestingLinksTitle} hasDarkBackground>
      <InterestingLinks links={frontmatter.forMembers.links} />
    </Section>
  </React.Fragment>
)

ForMembersPage.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query {
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
            menu {
              education
              about
              meetings
              contact
            }
            forMembers {
              leadersTitle
              roles 
              interestingLinksTitle
              announcementsTitle
              links {
                subtitle
                list {
                  title
                  url
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

export default withRefreshOnResize(ForMembersPage)
