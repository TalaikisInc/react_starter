import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Input extends PureComponent {
  constructor(props) {
    super(props)

    this.mounted = true

    this.state = {
      [this.props.id]: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = async (event) => {
    const { target, option } = event
    const { value, name } = target

    if (this.mounted) {
      (option) ? this.setState({
        [name]: option.value ? option.value : ''
      }) : this.setState({
        [name]: value
      })
    }
    this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <label labelFor={this.props.id}>{ this.props.label }{ this.props.req ? <sup>*</sup> : null }:</label>
        <div align='center'>
          <field
            error={this.props.error && this.props.error[this.props.id] ? this.props.error[this.props.id].msg : null}
            htmlFor={this.props.id}>
            <input id={this.props.id}
              type='text'
              name={this.props.id}
              onChange={this.handleChange}
              value={this.props[this.props.id]}
              autoComplete={this.props.autocomplete ? this.props.autocomplete : ''}
              placeHolder={this.props.label} />
          </field>
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.array,
  req: PropTypes.bool,
  autocomplete: PropTypes.string
}

export default Input
