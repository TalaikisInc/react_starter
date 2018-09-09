import React, { PureComponent } from 'react'

import Async from 'components/Async'
import { API_URL } from 'env'
const Submit = Async(() => import('templates/Submit'))
const Input = Async(() => import('templates/Input'))

// @TODO get user (link basically)

export default class Invite extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      invitations: [],
      emailFrom: '',
      link: '',
      emailTo: '',
      message: '',
      name: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.getInvitations = this.getInvitations.bind(this)
  }

  componentDidMount = async () => {
    await this.getInvitations()
  }

  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target

    this.setState({
      [name]: value,
      loading: true
    })

    this.getWhitelistStatus()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`${API_URL}/invite`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        emailFrom: this.state.emailFrom,
        link: this.state.link,
        emailTo: this.state.emailTo,
        msg: this.state.message,
        name: this.state.name
      })
    })
  }

  getInvitations = async () => {
    fetch(`${API_URL}/invitations?link=${this.state.link}`).then(res => res.json()).then(invites => {
      invites.forEach(invite => {
        const _to = invite.receiverid
        const _sent = invite.created_at
        const _seen = invite.updated_at
        let isSeen='not_seen'
        if (new Date(_seen) - new Date(_sent) > 0){ isSeen='Seen' }
        let sent = new Date(_sent).toLocaleDateString()
        this.state.invitations.push({
          to: _to,
          sent: sent,
          isSeen: isSeen
        })
      })
    })

    setTimeout(() => {
      this.invitations()
    }, 2000)
  }

  render() {
    const invites = this.state.invitations.map(i => (
      <tr>
        <td>{i.to}</td>
        <td>{i.sent}</td>
        <td>{i.isSeen}</td>
      </tr>
    ))

    return (
      <div>
        <h3> Welcome, <span id="name">{this.state.name}</span></h3>
        <p>{this.state.email}</p>
        <p>Your Invitation Code is: <span id="link">{this.state.link}</span></p>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <Input id='email' req={true} label='Email' handleChange={this.handleChange} />
          <Input id='message' req={true} label='Your message' handleChange={this.handleChange} />
          <Submit loading={this.state.loading} label='Invite' />
        </form>
        <br />
        <table>
          { invites }
        </table>
      </div> 
    )
  }
}
