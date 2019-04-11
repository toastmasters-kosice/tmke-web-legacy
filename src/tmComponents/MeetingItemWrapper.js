import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme, { getIsMobile, getWindowWidth } from '../theme'
import { Text } from '../components/Typography'

const BASE_SIZE = 400
const Wrapper = styled.div`
  ${theme.media.desktop`
    max-width: 400px;
    margin: 0 12px;
  `}
`

const MobileDescription = styled(Text.S)`
  margin-bottom: 12px;
  ${theme.media.desktop`
    display: none;
  `}
`
const DesktopDescription = styled(Text.S)`
  padding: 12px 0;
  ${theme.media.mobile`
    display: none;
  `}
`

const MeetingItemWrapper = ({ description, children }) => {
  const width = getIsMobile() ? getWindowWidth() - 24 : BASE_SIZE
  return (
    <Wrapper>
      <MobileDescription>
        {`${description}:`}
      </MobileDescription>
      {children({ width, height: Math.max(BASE_SIZE, width) })}
      <DesktopDescription>
        {`${description}.`}
      </DesktopDescription>
    </Wrapper>
  )
}

MeetingItemWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
}

export default MeetingItemWrapper
