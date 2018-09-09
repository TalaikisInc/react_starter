import React from 'react';
import { connect } from 'react-redux'

import Async from 'components/Async'
const Head = Async(() => import('components/Head'))

const Home = () => (
  <div>
    <Head title="Home" />
    <h1 className='title'>
      Yo, there!
    </h1>
  </div>
)

function mapStateToProps(state) {
  return { }
}

export default connect(mapStateToProps)(Home)
