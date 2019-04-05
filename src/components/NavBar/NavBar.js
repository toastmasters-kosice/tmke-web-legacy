import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import MenuButton from './MenuButton'
import { NAVIGATION_HEIGHT } from '../../constants'
import NavLink from './NavLink'

const Wrapper = styled.div`
  width: 100%;
  height: ${NAVIGATION_HEIGHT}px;
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.colors.BURGUNDY};
  box-shadow: ${theme.shadow.BOTTOM};
  ${theme.media.mobile`
    justify-content: space-between;
  `}
`

const LinksWrapper = styled.div`
  ${theme.media.desktop`
    display: flex;
  `}
  ${theme.media.mobile`
    position: absolute;
    top: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.shadow.BOTTOM};
    ${({ isOpen }) => !isOpen && `
      display: none;  
    `}
  `}
  
`

class NavBar extends React.Component {
  state = {
    isMobileMenuOpen: false
  }
  handleToggleMenuClicked = () => {
    this.setState(({ isMobileMenuOpen }) => ({
      isMobileMenuOpen: !isMobileMenuOpen
    }))
  }
  handleCloseMenuClick = () => {
    this.setState({
      isMobileMenuOpen: false
    })
  }
  render() {
    const { children, logo } = this.props
    const { isMobileMenuOpen } = this.state
    return (
      <Wrapper>
        {logo}
        <LinksWrapper isOpen={isMobileMenuOpen} onClick={this.handleCloseMenuClick}>
          {children}
        </LinksWrapper>
        <MenuButton
          p="12px 24px"
          onOpenMenu={this.handleToggleMenuClicked}
          isActive={isMobileMenuOpen}
        />
      </Wrapper>
    )
  }
}

NavBar.propTypes = {
  children: PropTypes.node,
  logo: PropTypes.node
}

NavBar.Link = NavLink

export default NavBar
