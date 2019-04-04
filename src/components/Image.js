import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  height: ${({ size }) => size};
  display: block;
`

const Image = ({ src, alt, size }) =>
  <StyledImage src={src} alt={alt} size={size} />

Image.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
