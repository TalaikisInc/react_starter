import { combineReducers } from 'redux'

import Test from 'reducers/test'
import TopBar from 'reducers/topbar'

const root = combineReducers({
  test: Test,
  topbar: TopBar
})

export default root
