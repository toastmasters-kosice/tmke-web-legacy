import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import slugify from 'slugify'
import { getIsMobile } from '../theme'
import ExternalLink from '../components/ExternalLink'
import { H3 } from '../components/Typography'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${space}
`

const DesktopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TmLinks = ({ links }) => getIsMobile()
  ? (
    <Column>
      {links.map(({ subtitle, list }) => (
        <React.Fragment key={slugify(subtitle)}>
          <H3 pt="12px">{subtitle}</H3>
          {list.map(({ url, title }) => (
            <ExternalLink
              key={slugify(url)}
              to={url}
              py="12px"
            >{title}
            </ExternalLink>
          ))}
        </React.Fragment>
      ))}
    </Column>)
  : (
    <DesktopRow>
      {links.map(({ subtitle, list }) => (
        <Column key={slugify(subtitle)} p="0 12px">
          <H3>{subtitle}</H3>
          {list.map(({ url, title }) => (
            <ExternalLink
              key={slugify(url)}
              to={url}
              py="12px"
            >{title}
            </ExternalLink>
          ))}
        </Column>
      ))}
    </DesktopRow>)

TmLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string
    }))
  }))
}

export default TmLinks
