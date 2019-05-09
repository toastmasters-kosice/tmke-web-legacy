import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import { scrollToElement } from '../../utils'

const StyledAnchor = styled.a`
  cursor: pointer;
`

const NavLink = ({ children, toId, toLink, ...rest }) => {
  const Comp = toId ? StyledAnchor : Link
  const props = toId ? { onClick() { scrollToElement(toId) } } : { to: toLink }
  return (
    <Comp {...props} {...rest}>
      {children}
    </Comp>
  )
}

NavLink.propTypes = {
  toId: PropTypes.string,
  toLink: PropTypes.string,
  children: PropTypes.node,
  ...space.propTypes
}

export default NavLink
