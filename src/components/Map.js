import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import slugify from 'slugify'

const MapRouter = styled.div`
  position:relative;
  text-align:right;
  height:${({ height }) => height}px;
  width:${({ width }) => width}px;
`
const GMapCanvas = styled.div`
  overflow:hidden;
  background:none!important;
  height:${({ height }) => height}px;
  width:${({ width }) => width}px;
`

const Map = ({ width, height, title, src }) => (
  <MapRouter height={height} width={width}>
    <GMapCanvas height={height} width={width}>
      <iframe
        title={title}
        height={height}
        width={width}
        id={slugify(title)}
        src={src}
        style={{ border: 'none' }}
        allowFullScreen
      />
    </GMapCanvas>
  </MapRouter>
)

Map.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default Map
