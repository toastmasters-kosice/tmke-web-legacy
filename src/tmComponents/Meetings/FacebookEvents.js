import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import slugify from 'slugify'

const StyledIframe = styled.iframe`
  border: none;
  overflow: hidden;
  display: block;
`
const FacebookEvents = ({ width, height, title }) =>
  <StyledIframe
    src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftoastmasters.kosice%2F&tabs=events&width=${width}&height=${height}&small_header=true&adapt_container_width=false&hide_cover=true&show_facepile=false&appId=405263680205819`}
    title={title}
    id={slugify(title)}
    width={width}
    height={height}
    allow="encrypted-media"
  />

FacebookEvents.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default FacebookEvents
