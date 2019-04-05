import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  text-align: center
`

const IconItem = ({ iconComp: IconComp, text, isBig }) => {
  const TextComp = isBig ? Text.M : Text.S
  return (
    <Wrapper>
      <IconComp size={isBig ? '7em' : '5em'} />
      <TextComp pt="12px">{text}</TextComp>
    </Wrapper>
  )
}

IconItem.propTypes = {
  iconComp: PropTypes.func.isRequired,
  isBig: PropTypes.bool.isRequired,
  text: PropTypes.node.isRequired
}

export default IconItem
