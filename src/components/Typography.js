import styled from 'styled-components'
import theme from '../theme'

const defaultTextConfig = {
  fontFamily: theme.fontFamily.LATO,
  tagName: 'span',
  fontSize: theme.fontSize.M
}

const createText = ({
  fontFamily,
  tagName,
  fontSize
}) => styled(tagName)`
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
`

export const Text = {
  M: createText(defaultTextConfig),
  S: createText({
    ...defaultTextConfig,
    fontSize: theme.fontSize.S
  })
}

export const H1 = createText({
  ...defaultTextConfig,
  tagName: 'h1',
  fontSize: theme.fontSize.H1
})
export const H2 = createText({
  ...defaultTextConfig,
  tagName: 'h2',
  fontSize: theme.fontSize.H2
})
export const H3 = createText({
  ...defaultTextConfig,
  tagName: 'h3',
  fontSize: theme.fontSize.H3
})
