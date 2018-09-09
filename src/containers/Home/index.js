import React from 'react';
import { connect } from 'react-redux'

import Async from 'components/Async'
const Head = Async(() => import('components/Head'))

const Home = () => (
  <div>
    <Head title="Home" />
    <div>
      Yo, there!
    </div>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Home)
