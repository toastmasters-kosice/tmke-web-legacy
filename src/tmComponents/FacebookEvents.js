import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

const FacebookEvents = ({ width, height, title, src }) =>
  <iframe
    src={src}
    title={title}
    id={slugify(title)}
    width={width}
    height={height}
    style={{ border: 'none', overflow: 'hidden' }}
    allow="encrypted-media"
  />

FacebookEvents.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default FacebookEvents
