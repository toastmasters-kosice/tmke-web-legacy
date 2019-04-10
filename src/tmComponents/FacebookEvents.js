import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

const FacebookEvents = ({ width, height, title }) =>
  <iframe
    src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftoastmasters.kosice%2F&tabs=events&width=${width}&height=${height}&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId=405263680205819`}
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
  title: PropTypes.string.isRequired
}

export default FacebookEvents
