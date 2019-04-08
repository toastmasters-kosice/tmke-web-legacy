import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const Map = ({ width, height, title, id, src }) => (
  <MapRouter height={height} width={width}>
    <GMapCanvas height={height} width={width}>
      <iframe
        title={title}
        height={height}
        width={width}
        id={id}
        src={src}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        allowFullScreen
      />
    </GMapCanvas>
  </MapRouter>
)

Map.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Map
