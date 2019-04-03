import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../../components/Typography'
import Section from '../../components/Section'

const Education = ({ id }) =>
  <Section
    id={id}
    title="Nauc sa spolu s nami"
  >
    <Text.S>
      So vzdelávacím systémom Pathways vieš získať vyše 300 unikátnych zručností.
    </Text.S>
    <Text.S>
      Aplikuj poznatky na pravidelných stretnutiach a dostaň ich do krvi.
    </Text.S>
  </Section>

Education.propTypes = {
  id: PropTypes.string.isRequired
}

export default Education
