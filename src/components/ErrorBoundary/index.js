import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true })
    logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>We have an error.</h1>
    }
    return this.props.children
  }
}
