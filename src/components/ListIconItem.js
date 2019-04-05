import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`

const ListIconItem = ({ iconComp: IconComp, text, isBig, isBold }) => {
  const TextComp = isBig ? Text.M : Text.S
  return (
    <Wrapper>
      <IconComp size={isBig ? '3.5em' : '2.3em'} />
      <TextComp pl="12px" isBold={isBold}>
        {text}
      </TextComp>
    </Wrapper>
  )
}

ListIconItem.propTypes = {
  iconComp: PropTypes.func.isRequired,
  isBig: PropTypes.bool,
  isBold: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default ListIconItem
