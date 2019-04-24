import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { routes, SECTION_ID } from '../../constants'
import NavBar from '../../components/NavBar'
import HomeButton from './HomeButton'
import NavLink from './NavLink'

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

const Navigation = ({ isLanding }) => (
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <NavBar logo={<HomeButton px="24px" isLanding={isLanding} />}>
        <NavLink {...getLinkProps(isLanding).education}>
          {frontmatter.menu.education}
        </NavLink>
        <NavLink {...getLinkProps(isLanding).about}>
          {frontmatter.menu.about}
        </NavLink>
        <NavLink {...getLinkProps(isLanding).meetings}>
          {frontmatter.menu.meetings}
        </NavLink>
        <NavLink {...getLinkProps(isLanding).contact}>
          {frontmatter.menu.contact}
        </NavLink>
        <NavLink {...getLinkProps(isLanding).forMembers}>
          {frontmatter.menu.forMembers}
        </NavLink>
      </NavBar>
    )}
  />
)

Navigation.propTypes = {
  isLanding: PropTypes.bool
}

export default Navigation

