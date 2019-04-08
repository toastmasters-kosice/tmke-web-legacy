import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import { H2 } from './Typography'
import theme from '../theme'
import { NAVIGATION_HEIGHT } from '../constants'

const Wrapper = styled.div`
  background: ${({ hasDarkBackground }) => hasDarkBackground ? theme.colors.GALLERY : theme.colors.WHITE};
  position: relative;
  ${theme.media.mobile`
    padding: 12px
  `};
  ${theme.media.desktop`
    text-align: center;
  `}
  ${space}
`
const StyledTitle = styled(H2)`
  color: ${theme.colors.BURGUNDY};
  ${theme.media.mobile`
    padding-bottom: 12px;
  `};
  ${theme.media.desktop`
    padding: 24px 0;
  `}
`

const NavigationElement = styled.div`
  position: absolute;
  top: -${NAVIGATION_HEIGHT}px;
`

const Section = ({ id, title, children, hasDarkBackground, ...props }) =>
  <Wrapper hasDarkBackground={hasDarkBackground} {...props}>
    <StyledTitle>{title}</StyledTitle>
    <NavigationElement id={id} />
    <div>
      {children}
    </div>
  </Wrapper>

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  hasDarkBackground: PropTypes.bool,
  children: PropTypes.node,
  ...space.props
}

export default Section
