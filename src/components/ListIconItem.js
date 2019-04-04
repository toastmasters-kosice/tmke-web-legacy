import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from './Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
`

const ListIconItem = ({ iconComp: IconComp, text }) =>
  <Wrapper>
    <IconComp size="2em" />
    <Text.S pl="12px">
      {text}
    </Text.S>
  </Wrapper>

ListIconItem.propTypes = {
  iconComp: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ListIconItem
