import React, { Component } from 'react'

import Loader from 'templates/Loader'

export default function Async(imported) {
  class Async extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null,
        loading: true
      }
    }

    componentDidMount = async () => {
      const { default: component } = await imported()

      this.setState({
        component: component,
        loading: false
      })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : <Loader color={LoaderColor} loading={this.state.loading} />
    }
  }

  return Async

}
