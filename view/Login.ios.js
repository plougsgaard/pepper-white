import React, {
  Component,
  PropTypes
} from 'react-native'

import _ from 'lodash'

import connectToStore from '../store/connect'

import LoginLayout from './LoginForm'

import { addUser } from '../model/users'
import { loadUserProfile } from '../model/userProfile'

let id = 0

class Login extends Component {
  constructor () {
    super()
  }
  static title = 'Login Screen'
  static mapState = (s) => ({
    users: s.users
  })
  static mapProps = (d) => ({
    addUser: (i) => d(addUser(i)),
    loadUserProfile: (token) => d(loadUserProfile(token))
  })
  addUser = () => {
    const { addUser } = this.props
    console.log('adding user')
    addUser(id++)
  }
  handleLogin = (fields) => {
    this.addUser()
  }
  handleSignUp = () => {
    alert('sign up')
  }
  handleForgotPassword = () => {
    alert('forgot password')
  }
  handleFacebookLogin = () => {
    alert('facebook login')
  }
  handleFacebookLogout = () => {
    alert('facebook logout')
  }
  onPressSignUp = () => {
    const { loadUserProfile } = this.props
    loadUserProfile('fancy_token_f4ges5hs5rh5')
  }
  render = () => (
    <LoginLayout
      onFacebookLogin={this.handleFacebookLogin}
      onFacebookLogout={this.handleFacebookLogout}
      onForgotPassword={this.handleForgotPassword}
      onSignUp={this.handleSignUp}
      onSubmit={this.handleLogin}/>
  )
}

export default connectToStore(Login)
