import React from 'react'
import debounce from 'lodash.debounce'
import { getWindowWidth } from '../theme'

const withRefreshOnResize = (Comp) => {
  class WithRefresh extends React.Component {
    state={
      width: getWindowWidth()
    }
    handleResize = debounce(() => {
      this.setState({ width: getWindowWidth() })
    }, 100)
    componentDidMount() {
      this.handleResize()
      window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }
    render() {
      const { width } = this.state
      return <Comp width={width} {...this.props} />
    }
  }
  return WithRefresh
}

export default withRefreshOnResize
