import React from 'react'

import { GridLoader } from 'react-spinners'
import { LoaderColor } from 'env'

const Loader = (props) => (
  <div align='center'>
    <GridLoader color={LoaderColor} loading={props.loading} />
  </div>
)

export default Loader
