import React from 'react'
import PropTypes from 'prop-types'

import Button from 'templates/Button'

const Submit = (props) => (
  <div align="center">
    { props.loading ? 'Workingw...'
      : <Button primary={true} type='submit' label={props.label} />
    }
  </div>
)

Submit.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string
}

export default Submit
