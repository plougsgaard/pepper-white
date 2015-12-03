import React, {
  Component,
  PropTypes,
  AppRegistry,
  StyleSheet,

  TouchableOpacity,
  NavigatorIOS,
  ScrollView,
  Text,
  TextInput,
  Image,
  View
} from 'react-native'

import _ from 'lodash'

import { FBSDKLoginManager, FBSDKLoginButton } from 'react-native-fbsdklogin'

import connectToStore from '../store/connect'

import { addUser } from '../model/users'
import { loadUserProfile } from '../model/userProfile'

import baseStyle from '../style/base'

let id = 0

class FacebookButton extends Component {
  constructor () {
    super()
  }
  render = () => (
    <FBSDKLoginButton
      style={styles.facebookButton}
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
}

class LoginLayout extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }
  static propTypes = {
    onPressSignIn: PropTypes.func.isRequired,
    onPressSignUp: PropTypes.func.isRequired
  }
  render = () => (
    <Image style={styles.container}
      resizeMode={Image.resizeMode.cover}
      source={{uri: 'http://i.imgur.com/1THDlju.jpg'}}>
      <View style={styles.header}>
        <Image style={styles.mark} source={{uri: 'http://i.imgur.com/RCAqlDc.png'}} />
      </View>
      <View style={styles.inputs}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputUsername} source={{uri: 'http://i.imgur.com/iVVVMRX.png'}}/>
          <TextInput
            style={[styles.input, styles.whiteFont]}
            placeholder='Username'
            placeholderTextColor='#FFF'
            value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
          <TextInput
            password={true}
            style={[styles.input, styles.whiteFont]}
            placeholder='Password'
            placeholderTextColor='#FFF'
            value={this.state.password}
          />
        </View>
        <TouchableOpacity>
        <View style={styles.forgotContainer}>
          <Text style={styles.greyFont}>Forgot Password</Text>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={this.props.onPressSignIn}>
        <View style={styles.signin}>
          <Text style={styles.whiteFont}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.facebookContainer}>
          <FacebookButton />
        </View>
      </TouchableOpacity>
      <View style={styles.signup}>
        <TouchableOpacity onPress={this.props.onPressSignUp}>
          <Text style={styles.greyFont}>
            Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Image>
  )
}

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
  renderLogin = () => (
    <View style={baseStyle.centerContainer}>
      {_.map(this.props.users, (u) => <Text key={u.name}>{u.name}</Text>)}
      <Text onPress={this.addUser}>Add user</Text>
      <FacebookButton />
     </View>
  )
  onPressSignIn = () => {
    this.addUser()
  }
  onPressSignUp = () => {
    const { loadUserProfile } = this.props
    loadUserProfile('fancy_token_f4ges5hs5rh5')
  }
  render = () => (
    <LoginLayout
      onPressSignIn={this.onPressSignIn}
      onPressSignUp={this.onPressSignUp}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .5,
    backgroundColor: 'transparent'
  },
  mark: {
    width: 150,
    height: 150
  },
  signin: {
    backgroundColor: '#FF3366',
    padding: 20,
    alignItems: 'center'
  },
  facebookContainer: {
    paddingTop: 15
  },
  facebookButton: {
    backgroundColor: '#3366FF',
    padding: 30,
    alignItems: 'center'
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .15
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: .25
  },
  inputPassword: {
    marginLeft: 15,
    width: 20,
    height: 21
  },
  inputUsername: {
    marginLeft: 15,
    width: 20,
    height: 20
  },
  inputContainer: {
    padding: 10,
    borderWidth: 2,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  input: {
    position: 'absolute',
    left: 61,
    top: 12,
    right: 0,
    height: 20,
    fontSize: 14
  },
  forgotContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF',
    fontWeight: 'bold'
  }
})

export default connectToStore(Login)
