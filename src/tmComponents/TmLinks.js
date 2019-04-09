import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import slugify from 'slugify'
import ExternalLink from '../components/ExternalLink'
import { H3 } from '../components/Typography'
import { getIsMobile } from '../theme'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${space}
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
`

const TmLinks = ({ links }) => {
  const isMobile = getIsMobile()
  const CompWrapper = isMobile ? Column : Grid
  return (
    <CompWrapper>
      {links.map(({ subtitle, list }) => (
        <Column pt="12px" key={slugify(subtitle)}>
          <H3>{subtitle}</H3>
          {list.map(({ url, title }) => (
            <ExternalLink key={slugify(url)} to={url} py="12px">{title}</ExternalLink>
          ))}
        </Column>
      ))}
    </CompWrapper>
  )
}

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
