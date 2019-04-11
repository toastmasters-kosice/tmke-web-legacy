import smoothscroll from 'smoothscroll-polyfill'
import 'destyle.css'

export const onInitialClientRender = () => {
  smoothscroll.polyfill()
}
