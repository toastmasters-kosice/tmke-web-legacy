import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FaChevronCircleDown } from 'react-icons/fa'
import theme from '../theme'

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`

const ContentWrapper = styled.div`
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
  color: ${theme.colors.WHITE};
  ${theme.media.desktop`
    position: absolute;
    bottom: 30px;
  `}
  ${theme.media.mobile`
    margin-top: 30px;
  `}
`

const Hero = ({ children, backgroundImage, continueTo }) =>
  <Wrapper>
    <StyledImg fluid={backgroundImage} style={{ position: 'absolute', top: 0 }} />
    <ContentWrapper>
      {children}
      <StyledLink to={continueTo}>
        <FaChevronCircleDown size="3.5rem" />
      </StyledLink>
    </ContentWrapper>
  </Wrapper>

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundImage: PropTypes.object,
  continueTo: PropTypes.string.isRequired
}

export default Hero
