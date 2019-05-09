import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { GiHamburgerMenu } from 'react-icons/gi'
import theme from '../../theme'

const MenuAnchor = styled.a`
  background: ${({ isActive }) => isActive ? theme.colors.WHITE : theme.colors.BURGUNDY};
  color: ${({ isActive }) => isActive ? theme.colors.BURGUNDY : theme.colors.WHITE};
  cursor: pointer;
  ${space};
  ${theme.media.desktop`
    display: none;
  `};
`

const MenuButton = ({ onOpenMenu, isActive, ...props }) => (
  <MenuAnchor onClick={onOpenMenu} {...props} isActive={isActive}>
    <GiHamburgerMenu />
  </MenuAnchor>
)

MenuButton.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  ...space.propTypes
}
export default MenuButton
