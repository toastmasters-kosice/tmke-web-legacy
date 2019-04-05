import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getIsMobile } from '../theme'
import { Text } from './Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`

const ListIconItem = ({ iconComp: IconComp, text, iconSize }) => {
  const TextComp = getIsMobile() ? Text.S : Text.M
  return (
    <Wrapper>
      <IconComp size={iconSize} />
      <TextComp pl="12px">
        {text}
      </TextComp>
    </Wrapper>
  )
}

ListIconItem.defaultProps = {
  iconSize: '2em'
}

ListIconItem.propTypes = {
  iconComp: PropTypes.func.isRequired,
  iconSize: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default ListIconItem
