import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import { Text } from '../Typography'

const MenuAnchor = styled.a`
  background: ${({ isActive }) => isActive ? theme.colors.WHITE : theme.colors.BURGUNDY};
  color: ${({ isActive }) => isActive ? theme.colors.BURGUNDY : theme.colors.WHITE};
  ${space}
  ${theme.media.desktop`
    display: none;
  `}
`

const MenuButton = ({ onOpenMenu, isActive, ...props }) => (
  <MenuAnchor onClick={onOpenMenu} {...props} isActive={isActive}>
    <Text.M>Menu</Text.M>
  </MenuAnchor>
)

MenuButton.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  ...space.propTypes
}
export default MenuButton
