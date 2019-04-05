import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import theme from '../../theme'
import { Text } from '../../components/Typography'
import { routes } from '../../constants'
import TmiLogo from '../TmiLogo'

const StyledAnchor = styled(Link)`
  color: ${theme.colors.WHITE};
  display: flex;
  letter-spacing: 0.02em;
  ${space}
`

const HomeButton = props =>
  <StyledAnchor to={routes.HOME} {...props}>
    <TmiLogo size="21px" />
    <Text.M pl="12px" isBold>Košice</Text.M>
  </StyledAnchor>

HomeButton.propTypes = space.propTypes

export default HomeButton

