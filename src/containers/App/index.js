import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ReactGA from 'react-ga'

import * as actions from 'actions'
import { HandleProgressBar } from 'compoennts/ProgressBar'
import Async from 'components/Async'
import env from 'env'
ReactGA.initialize(env.GA)
const supportsHistory = 'pushState' in window.history
const Home = Async(() => import('containers/Home'))
const Header = Async(() => import('components/Header'))
const Footer = Async(() => import('components/Footer'))
const ErrorBoundary = Async(() => import('components/ErrorBoundary'))

class App extends PureComponent {
  pageviewTracking() {
    ReactGA.initialize(process.env.REACT_APP_GA)
    ReactGA.pageview(window.location.pathName)
  }

  render() {
    return (
      <ErrorBoundary>
        <div>
          <BrowserRouter onUpdate={this.pageviewTracking} forceRefresh={!supportsHistory}>
            <div>
              <HandleProgressBar />
              <Header />
              <Switch>
                <Route exact strict sensitive path='/' component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </ErrorBoundary>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps, actions)(App)
