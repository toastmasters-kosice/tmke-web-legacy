import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import { routes, SECTION_ID } from '../../constants'
import { Text } from '../../components/Typography'
import NavBar from '../../components/NavBar'
import TmiLogo from '../TmiLogo'

const StyledAnchor = styled(NavBar.Link)`
  color: ${theme.colors.WHITE};
  display: flex;
  letter-spacing: 0.02em;
  ${space}
`

const HomeButton = ({ isLanding, ...props }) =>
  <StyledAnchor {...(isLanding ? { toId: SECTION_ID.HOME } : { toLink: routes.HOME })} {...props}>
    <TmiLogo size="21px" />
    <Text.M pl="12px" isBold>Košice</Text.M>
  </StyledAnchor>

HomeButton.propTypes = {
  isLanding: PropTypes.bool,
  ...space.propTypes
}

export default HomeButton

