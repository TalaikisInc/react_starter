import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <div align="center">
    <button type={props.type}>{props.label ? props.label : null}</button>
  </div>
)

Button.propTypes = {
  primary: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string
}

Button.defaultProps = {
  type: 'button'
}

export default Button
