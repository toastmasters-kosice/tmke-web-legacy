import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { routes } from '../../constants'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  );
`

const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
`

const StyledLink = styled(Link)`
  position: absolute;
  height: 10px;
  width: 15px;
  background: white;
  bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`

const Hero = ({ children, backgroundUrl }) =>
  <div style={{ position: 'relative', height: '100vh' }}>
    <StyledImg fixed={backgroundUrl} style={{ position: 'absolute', top: 0 }} />
    <Wrapper>
      {children}
      <StyledLink to={routes.EDUCATION} />
    </Wrapper>
  </div>

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundUrl: PropTypes.string
}

export default Hero
