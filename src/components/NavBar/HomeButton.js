import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import { Text } from '../Typography'

const StyledAnchor = styled.a`
  color: ${theme.colors.WHITE};
  ${space}
`

const HomeButton = props =>
  <StyledAnchor href="#" {...props}>
    <Text.M>Home</Text.M>
  </StyledAnchor>

HomeButton.propTypes = space.propTypes

export default HomeButton

