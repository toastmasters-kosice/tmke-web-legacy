import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { Text } from '../components/Typography'

const Wrapper = styled.div`
  height: 100vh;
`

export default () => (
  <Wrapper>
    <NavBar />
    <div style={{ paddingTop: 60 }}>
      <Text.M>
        Stranka TM KE
      </Text.M>
    </div>
  </Wrapper>
)
