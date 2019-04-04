import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import MenuButton from './MenuButton'
import NavGroup from './NavGroup'
import HomeButton from './HomeButton'
import { NAVIGATION_HEIGHT } from '../../constants'

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

const DesktopInnerWrapper = styled.div`
  display: flex;
  ${theme.media.mobile`
    display: none;  
  `}
`

const MobileInnerWrapper = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${theme.shadow.BOTTOM};
  ${({ isOpen }) => !isOpen && `
    display: none;  
  `}
  ${theme.media.desktop`
    display: none;  
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
    const { isMobileMenuOpen } = this.state
    return (
      <Wrapper>
        <HomeButton px="24px" />
        <DesktopInnerWrapper>
          <NavGroup />
        </DesktopInnerWrapper>
        <MenuButton
          p="12px 24px"
          onOpenMenu={this.handleToggleMenuClicked}
          isActive={isMobileMenuOpen}
        />
        <MobileInnerWrapper isOpen={isMobileMenuOpen} onClick={this.handleCloseMenuClick}>
          <NavGroup />
        </MobileInnerWrapper>
      </Wrapper>
    )
  }
}

NavBar.propTypes = {}

export default NavBar
