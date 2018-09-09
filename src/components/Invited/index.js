import React, { PureComponent } from 'react'

import { SiteTitle } from 'env'

export default class Invited extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      sendername: '',
      sendermsg: ''
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Your Have Been Invited!!</h1>
          <p>
            {this.props.sendername} has invited you to join {SiteTitle}
          </p>
          <p>{this.props.sendername} says: {this.props.sendermsg}</p>
        </div>
      </div>
    )
  }
}
