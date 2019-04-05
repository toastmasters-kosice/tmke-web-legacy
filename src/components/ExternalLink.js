import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './Typography'

const ExternalLink = ({ to, children, textComp: TextComp }) =>
  <a href={to} target="_blank" rel="noreferrer noopener">
    <TextComp isBold>
      {children}
    </TextComp>
  </a>

ExternalLink.defaultProps = {
  textComp: Text.S
}

ExternalLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  textComp: PropTypes.object
}

export default ExternalLink
