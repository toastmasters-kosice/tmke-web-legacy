import React from 'react'
import PropTypes from 'prop-types'
import Image from '../components/Image'
import tmiLogo from '../images/tmi-logo.png'

const TmiLogo = ({ size }) =>
  <Image
    src={tmiLogo}
    alt="Tmi logo"
    size={size}
  />

TmiLogo.propTypes = {
  size: PropTypes.string.isRequired
}

export default TmiLogo
