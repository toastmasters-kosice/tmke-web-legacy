import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import theme from '../../theme'
import MeetingItemWrapper from './MeetingItemWrapper'
import FacebookEvents from './FacebookEvents'
import Map from '../../components/Map'
import { Text } from '../../components/Typography'

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            meetingsSection {
              description
              offlineDescription
              calendar {
                title
                description
              }
              primaryMap {
                src
                title
                description
              }
              secondaryMap {
                src
                title
                description
              }
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  padding-top: 12px;
  text-align: center;
  ${theme.media.desktop`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `};
  ${theme.media.mobile`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    overflow: hidden;
    & > div {
      margin-bottom: 24px;
    }
    div:last-child {
      margin-bottom: 0;
    }
  `};
`

const SectionDescription = styled(Text.S)`
  text-align: center;
`

const Meetings = () =>
  <StaticQuery
    query={query}
    render={(
      { allMarkdownRemark: { edges: [{ node: { frontmatter } }] } }
    ) => (
      <React.Fragment>
        <SectionDescription>{frontmatter.meetingsSection.description}</SectionDescription>
        <Wrapper>
          <MeetingItemWrapper
            description={frontmatter.meetingsSection.calendar.description}
            offlineDescription={frontmatter.meetingsSection.offlineDescription}
          >
            {({ width, height }) => (
              <FacebookEvents
                width={width}
                height={height}
                {...frontmatter.meetingsSection.calendar}
              />)}
          </MeetingItemWrapper>
          <MeetingItemWrapper
            description={frontmatter.meetingsSection.primaryMap.description}
            offlineDescription={frontmatter.meetingsSection.offlineDescription}
          >
            {({ width, height }) => (
              <Map
                width={width}
                height={height}
                {...frontmatter.meetingsSection.primaryMap}
              />)}
          </MeetingItemWrapper>
          <MeetingItemWrapper
            description={frontmatter.meetingsSection.secondaryMap.description}
            offlineDescription={frontmatter.meetingsSection.offlineDescription}
          >
            {({ width, height }) => (
              <Map
                width={width}
                height={height}
                {...frontmatter.meetingsSection.secondaryMap}
              />)}
          </MeetingItemWrapper>
        </Wrapper>
      </React.Fragment>
    )}
  />

export default Meetings
