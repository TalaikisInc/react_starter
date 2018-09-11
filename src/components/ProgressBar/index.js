import React, { PureCompoennt } from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'
import { connect } from 'react-redux'

TopBarProgress.config({
  barColors: {
    '0': '#5f6875',
    '0.5': '#4a535f',
    '1.0': '#373d45'
  },
    shadowBlur: 0,
    barThickness: 2
})

export class ProgressBar extends PureCompoennt {
  render() {
    const { progressBarStatus } = this.props

    if (progressBarStatus === 'OPEN') {
      return(<TopBarProgress />)
    } else {
      return(null)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    progressBarStatus: state.ui.progressBarStatus
  })
}

export const HandleProgressBar = connect(
  mapStateToProps,
  null
)(ProgressBar)

export default HandleProgressBar
