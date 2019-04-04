import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './Typography'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;
`

const IconItem = ({ iconComp: IconComp, text }) =>
  <Wrapper>
    <IconComp size="5em" />
    <Text.S pl="12px">
      {text}
    </Text.S>
  </Wrapper>

IconItem.propTypes = {
  iconComp: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default IconItem
