import React, {
  Component,
  AppRegistry,
  StyleSheet,

  TouchableOpacity,
  NavigatorIOS,
  ScrollView,
  Text,
  View
} from 'react-native'

import _ from 'lodash'

import { FBSDKLoginManager, FBSDKLoginButton } from 'react-native-fbsdklogin'

import connectToStore from '../store/connect'

import { addUser } from '../model/users'

import styles from '../style/base'

let id = 0

const FacebookButton = ({

}) => (
  <FBSDKLoginButton
    onLoginFinished={(error, result) => {
     if (error) {
       alert('Error logging in.');
     } else {
       console.log(result)
       if (result.isCancelled) {
         alert('Login cancelled.');
       } else {
         alert('Logged in.');
       }
     }
    }}
    onLogoutFinished={() => alert('Logged out.')}
    readPermissions={['public_profile', 'email']}
    publishPermissions={[]} />
)

class Login extends Component {
  constructor () {
    super()
  }
  static title = 'Login Screen'
  static mapState = (s) => ({
    users: s.users
  })
  static mapProps = (d) => ({
    addUser: (i) => d(addUser(i))
  })
  addUser = () => {
    const { addUser } = this.props
    addUser(id++)
  }
  renderLogin = () => (
    <View style={styles.centerContainer}>
      {_.map(this.props.users, (u) => <Text key={u.name}>{u.name}</Text>)}
      <Text onPress={this.addUser}>Add user</Text>
      
     </View>
  )
  render = () => (
    this.renderLogin()
  )
}

export default connectToStore(Login)
