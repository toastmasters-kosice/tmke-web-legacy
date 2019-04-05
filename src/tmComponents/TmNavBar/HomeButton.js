import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import tmiLogo from '../../images/tmi-logo.png'
import theme from '../../theme'
import { Text } from '../../components/Typography'
import Image from '../../components/Image'
import { routes } from '../../constants'

const StyledAnchor = styled(Link)`
  color: ${theme.colors.WHITE};
  display: flex;
  letter-spacing: 0.02em;
  ${space}
`

const HomeButton = props =>
  <StyledAnchor to={routes.HOME} {...props}>
    <Image src={tmiLogo} alt="TMI logo" size="21px" />
    <Text.M pl="12px" isBold>Košice</Text.M>
  </StyledAnchor>

HomeButton.propTypes = space.propTypes

export default HomeButton

