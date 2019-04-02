import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import theme from '../../theme'
import { Text } from '../Typography'

const StyledLink = styled(Link)`
  ${space};
  ${theme.media.mobile`
    width: 100%;
    background: ${theme.colors.WHITE};
  `};
`

const StyledText = styled(Text.M)`
  ${theme.media.mobile`
    color: ${theme.colors.BURGUNDY};
  `};
  ${theme.media.desktop`
    color: ${theme.colors.WHITE};
  `};
`

const NavLink = ({ children, to, ...props }) =>
  <StyledLink to={to} {...props}>
    <StyledText>
      {children}
    </StyledText>
  </StyledLink>

NavLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
  ...space.propTypes
}

export default NavLink
