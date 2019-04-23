import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme'
import { getIsMobile, getWindowWidth, getIsOnline } from '../../utils'
import { Text } from '../../components/Typography'

const BASE_SIZE = 400
const Wrapper = styled.div`
  ${theme.media.desktop`
    max-width: 400px;
    margin: 0 12px;
  `}
  ${theme.media.mobile`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const OfflineRect = styled.div`
  width: ${BASE_SIZE}px;
  height: ${BASE_SIZE}px;
  background: ${theme.colors.GALLERY};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const MeetingItemWrapper = ({ description, children, offlineDescription }) => {
  const width = getIsMobile() ? Math.min(getWindowWidth() - 24, BASE_SIZE) : BASE_SIZE
  return (
    <Wrapper>
      <MobileDescription>
        {`${description}:`}
      </MobileDescription>
      {getIsOnline()
        ? children({ width, height: Math.max(BASE_SIZE, width) })
        : (
          <OfflineRect>
            <Text.S px="24px">{offlineDescription}</Text.S>
          </OfflineRect>
        )}
      <DesktopDescription>
        {`${description}.`}
      </DesktopDescription>
    </Wrapper>
  )
}

MeetingItemWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  offlineDescription: PropTypes.string.isRequired
}

export default MeetingItemWrapper
