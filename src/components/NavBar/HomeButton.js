import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { Link } from 'gatsby'
import theme from '../../theme'
import { Text } from '../Typography'
import { routes } from '../../constants'

const StyledAnchor = styled(Link)`
  color: ${theme.colors.WHITE};
  ${space}
`

const HomeButton = props =>
  <StyledAnchor to={routes.HOME} {...props}>
    <Text.M>Home</Text.M>
  </StyledAnchor>

HomeButton.propTypes = space.propTypes

export default HomeButton

