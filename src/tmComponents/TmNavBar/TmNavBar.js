import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import NavBar from '../../components/NavBar'
import { routes } from '../../constants'
import HomeButton from './HomeButton'

const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            menu {
              education
              about
              meetings
              contact
              forMembers
            }
          }
        }
      }
    }
  }
`

const TmNavBar = () => (
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <NavBar logo={<HomeButton px="24px" />}>
        <NavBar.Link to={routes.EDUCATION} p="12px 24px">{frontmatter.menu.education}</NavBar.Link>
        <NavBar.Link to={routes.ABOUT} p="12px 24px">{frontmatter.menu.about}</NavBar.Link>
        <NavBar.Link to={routes.MEETINGS} p="12px 24px">{frontmatter.menu.meetings}</NavBar.Link>
        <NavBar.Link to={routes.CONTACT} p="12px 24px">{frontmatter.menu.contact}</NavBar.Link>
        <NavBar.Link to={routes.FOR_MEMBERS} p="12px 24px">{frontmatter.menu.forMembers}</NavBar.Link>
      </NavBar>
    )}
  />
)

export default TmNavBar

