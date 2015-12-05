import React, {
  Component,
  PropTypes
} from 'react-native'

import _ from 'lodash'

import connectToStore from '../store/connect'

import LoginLayout from './LoginForm'

import { loadUserProfile } from '../model/userProfile'

class Login extends Component {
  constructor () {
    super()
  }
  static title = 'Login Screen'
  static mapState = (s) => ({
    userProfile: s.userProfile
  })
  static mapProps = (d) => ({
    loadUserProfile: (token) => d(loadUserProfile(token))
  })
  handleLogin = (fields) => {
    console.log('login', fields)
  }
  handleSignUp = () => {
    console.log('sign up')
  }
  handleForgotPassword = () => {
    console.log('forgot password')
  }
  handleFacebookLogin = () => {
    console.log('facebook login')
  }
  handleFacebookLogout = () => {
    console.log('facebook logout')
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
