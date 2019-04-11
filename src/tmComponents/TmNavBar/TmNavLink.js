import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import NavBar from '../../components/NavBar'
import { Text } from '../../components/Typography'

const StyledLink = styled(NavBar.Link)`
  ${theme.media.mobile`
     width: 100%;
     background: ${theme.colors.WHITE};
  `};
  padding: 12px 24px;
`

const StyledText = styled(Text.M)`
 ${theme.media.mobile`
    color: ${theme.colors.BURGUNDY};
  `};
 ${theme.media.desktop`
    color: ${theme.colors.WHITE};
  `};
 `

const TmNavLink = ({ children, ...props }) =>
  <StyledLink {...props}>
    <StyledText isBold>
      {children}
    </StyledText>
  </StyledLink>

TmNavLink.propTypes = {
  children: PropTypes.string.isRequired
}

export default TmNavLink
