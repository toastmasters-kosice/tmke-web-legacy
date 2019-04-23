import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import {
  GiAura,
  GiFireworkRocket,
  GiGrapes,
  GiHangGlider,
  GiLaurelsTrophy,
  GiPublicSpeaker,
  GiSeedling,
  GiSpiderWeb
} from 'react-icons/gi'
import theme from '../theme'
import { getIsMobile } from '../utils'
import { H1, Text } from '../components/Typography'
import Hero from '../components/Hero'
import Section from '../components/Section'
import { SECTION_ID } from '../constants'
import ListIconItem from '../components/ListIconItem'
import IconItem from '../components/IconItem'
import Map from '../components/Map'
import ExternalLink from '../components/ExternalLink'
import withRefreshOnResize from '../components/withRefreshOnResize'
import TmNavBar from '../tmComponents/TmNavBar'
import TmiLogo from '../tmComponents/TmiLogo'
import TmHead from '../tmComponents/TmHead'
import MeetingItemWrapper from '../tmComponents/MeetingItemWrapper'
import FacebookEvents from '../tmComponents/FacebookEvents'
import Contacts from '../tmComponents/Contacts'

const StyledH1 = styled(H1)`
  color: ${theme.colors.WHITE}
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
const StyledAboutUl = styled.ul`
  ${theme.media.desktop`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 24px;
    padding-bottom: 12px;
    li: first-child {
      justify-self: flex-end;
    }
    li: last-child {
      justify-self: flex-start;
    }
  `};
`
const MeetingsWrapper = styled.div`
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
// todo break into smaller parts
const LandingPage = ({
  data: {
    file,
    allMarkdownRemark: { edges: [{ node: { frontmatter } }] }
  }
}) => {
  const isDesktop = !getIsMobile()
  return (
    <React.Fragment>
      <TmHead {...frontmatter.head} />
      <TmNavBar isLanding />
      <div id={SECTION_ID.HOME} />
      <Hero
        backgroundImage={file && file.childImageSharp.fluid}
        continueToId={SECTION_ID.EDUCATION}
      >
        <StyledH1>
          {frontmatter.hero.h1}
        </StyledH1>
      </Hero>
      <Section id={SECTION_ID.EDUCATION} title={frontmatter.menu.education} pb="24px">
        {isDesktop && (
          <SectionWrapper>
            <SectionDescription>{frontmatter.educationSection.description}</SectionDescription>
          </SectionWrapper>)
        }
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
      </Section>
      <Section id={SECTION_ID.ABOUT} title={frontmatter.menu.about} hasDarkBackground>
        <StyledAboutUl>
          <li>
            <IconItem
              iconComp={TmiLogo}
              isBig={isDesktop}
              text={
                <span>
                  {frontmatter.aboutSection.label1part1}
                  &nbsp;
                  <ExternalLink
                    to="https://www.toastmasters.org/"
                    textComp={isDesktop ? Text.M : Text.S}
                  >
                    {frontmatter.aboutSection.link}
                  </ExternalLink>
                  .
                </span>
              }
            />
          </li>
          <li>
            <IconItem
              iconComp={GiSeedling}
              isBig={isDesktop}
              // Klub bol chartrovany 15.4.2015
              text={frontmatter.aboutSection.label2}
            />
          </li>
          <li>
            <IconItem
              iconComp={GiGrapes}
              isBig={isDesktop}
              text={frontmatter.aboutSection.label3}
            />
          </li>
        </StyledAboutUl>
      </Section>
      <Section id={SECTION_ID.MEETINGS} title={frontmatter.menu.meetings} pb="12px">
        <SectionDescription>{frontmatter.meetingsSection.description}</SectionDescription>
        <MeetingsWrapper>
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
        </MeetingsWrapper>
      </Section>
      <Section id={SECTION_ID.CONTACT} title={frontmatter.menu.contact} hasDarkBackground>
        <Contacts />
      </Section>
    </React.Fragment>
  )
}

LandingPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  })
}

export const query = graphql`
  query {
    file(relativePath: { eq: "toast.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            head {
              title
              description
              keywords
              imageUrl
              websiteUrl
            }
            hero {
              h1
            }
            menu {
              education
              about
              meetings
              contact
            }
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
            aboutSection {
              label1part1
              link
              label2
              label3
            }
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

export default withRefreshOnResize(LandingPage)
