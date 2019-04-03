import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H2 } from './Typography'
import theme from '../theme'

const Wrapper = styled.div`
  background: ${({ hasDarkBackground }) => hasDarkBackground ? theme.colors.GALLERY : theme.colors.WHITE};
  ${theme.media.mobile`
    padding: 12px
  `};
`
const StyledTitle = styled(H2)`
  color: ${theme.colors.BURGUNDY};
  ${theme.media.mobile`
    padding-bottom: 12px;
  `};
`

const Section = ({ id, title, children, hasDarkBackground }) =>
  <Wrapper id={id} hasDarkBackground={hasDarkBackground}>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </Wrapper>

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  hasDarkBackground: PropTypes.bool,
  children: PropTypes.node
}

export default Section
