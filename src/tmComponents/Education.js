import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  GiAura,
  GiFireworkRocket, GiHangGlider,
  GiLaurelsTrophy,
  GiPublicSpeaker,
  GiSpiderWeb
} from 'react-icons/gi'
import { graphql, StaticQuery } from 'gatsby'
import ListIconItem from '../components/ListIconItem'
import { Text } from '../components/Typography'
import theme from '../theme'

const SectionDescription = styled(Text.S)`
  text-align: center;
`
const SectionWrapper = styled.div`
  display: inline-block;
  width: 80%;
`
const StyledEduUl = styled.ul`
  ${theme.media.desktop`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 24px;
    li:nth-child(2n+1) {
      justify-self: flex-end;
      text-align: right;
    }
    li:nth-child(2n) {
      text-align: left;
    }
    padding: 24px 0;
  `};
`

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            educationSection {
              description
              label1
              label2
              label3
              label4
              label5
              label6
              final
            }
          }
        }
      }
    }
  }
`

const Education = ({ isDesktop }) =>
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <React.Fragment>
        {isDesktop && (
          <SectionWrapper>
            <SectionDescription>{frontmatter.educationSection.description}</SectionDescription>
          </SectionWrapper>
        )}
        <StyledEduUl>
          <li>
            <ListIconItem
              iconComp={GiPublicSpeaker}
              text={frontmatter.educationSection.label1}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiAura}
              text={frontmatter.educationSection.label2}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiLaurelsTrophy}
              text={frontmatter.educationSection.label3}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiSpiderWeb}
              text={frontmatter.educationSection.label4}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiFireworkRocket}
              text={frontmatter.educationSection.label5}
              isBig={isDesktop}
            />
          </li>
          <li>
            <ListIconItem
              iconComp={GiHangGlider}
              text={frontmatter.educationSection.label6}
              isBig={isDesktop}
            />
          </li>
        </StyledEduUl>
        <SectionDescription>
          {frontmatter.educationSection.final}
        </SectionDescription>
      </React.Fragment>
    )}
  />

Education.propTypes = {
  isDesktop: PropTypes.bool.isRequired
}

export default Education
