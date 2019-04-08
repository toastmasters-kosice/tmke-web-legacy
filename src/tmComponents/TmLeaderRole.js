import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from '../components/Typography'

const Wrapper = styled.div`
  display:flex;
  padding: 8px 0;
  align-items: center;
`

const TmLeaderRole = ({ children }) =>
  <Wrapper>
    <Text.M>
      &#8226;&nbsp;
    </Text.M>
    <Text.M>
      {children}
    </Text.M>
  </Wrapper>

TmLeaderRole.propTypes = {
  children: PropTypes.node
}

export default TmLeaderRole
