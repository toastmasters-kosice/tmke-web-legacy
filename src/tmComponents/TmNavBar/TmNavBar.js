import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { routes, SECTION_ID } from '../../constants'
import NavBar from '../../components/NavBar'
import HomeButton from './HomeButton'
import TmNavLink from './TmNavLink'

export const query = graphql`
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

const getLinkProps = isLanding => isLanding
  ? {
    education: { toId: SECTION_ID.EDUCATION },
    about: { toId: SECTION_ID.ABOUT },
    meetings: { toId: SECTION_ID.MEETINGS },
    contact: { toId: SECTION_ID.CONTACT },
    forMembers: { toLink: routes.FOR_MEMBERS }
  }
  : {
    education: { toLink: routes.EDUCATION },
    about: { toLink: routes.ABOUT },
    meetings: { toLink: routes.MEETINGS },
    contact: { toLink: routes.CONTACT },
    forMembers: { toLink: routes.FOR_MEMBERS }
  }

const TmNavBar = ({ isLanding }) => (
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <NavBar logo={<HomeButton px="24px" isLanding={isLanding} />}>
        <TmNavLink {...getLinkProps(isLanding).education}>
          {frontmatter.menu.education}
        </TmNavLink>
        <TmNavLink {...getLinkProps(isLanding).about}>
          {frontmatter.menu.about}
        </TmNavLink>
        <TmNavLink {...getLinkProps(isLanding).meetings}>
          {frontmatter.menu.meetings}
        </TmNavLink>
        <TmNavLink {...getLinkProps(isLanding).contact}>
          {frontmatter.menu.contact}
        </TmNavLink>
        <TmNavLink {...getLinkProps(isLanding).forMembers}>
          {frontmatter.menu.forMembers}
        </TmNavLink>
      </NavBar>
    )}
  />
)

TmNavBar.propTypes = {
  isLanding: PropTypes.bool
}

export default TmNavBar

