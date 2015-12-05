import React, {
  Component,
  PropTypes,
  StyleSheet,

  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View
} from 'react-native'

import { reduxForm } from 'redux-form/native'

import baseStyle from '../style/base'

import FacebookButton from './LoginFacebookButton'

class LoginLayout extends Component {
  constructor () {
    super()
  }
  static propTypes = {
    onFacebookLogin: PropTypes.func.isRequired,
    onFacebookLogout: PropTypes.func.isRequired,
    onForgotPassword: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired // from redux-form via onSubmit
  }
  renderFacebookButton = () => {
    const { onFacebookLogin, onFacebookLogout } = this.props
    return (
      <FacebookButton
        onLoginFinished={onFacebookLogin}
        onLogoutFinished={onFacebookLogout}/>
    )
  }
  render = () => {
    const {
      fields: { email, password },
      handleSubmit,
      onForgotPassword,
      onSignUp
    } = this.props
    console.log(this.props)
    return (
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
              {...email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputPassword} source={{uri: 'http://i.imgur.com/ON58SIG.png'}}/>
            <TextInput
              password={true}
              style={[styles.input, styles.whiteFont]}
              placeholder='Password'
              placeholderTextColor='#FFF'
              {...password}
            />
          </View>
          <TouchableOpacity onPress={onForgotPassword}>
            <View style={styles.forgotContainer}>
              <Text style={styles.greyFont}>Forgot Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.signInButton}>
            <Text style={styles.whiteFont}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.facebookContainer}>
            {this.renderFacebookButton()}
          </View>
        </TouchableOpacity>
        <View style={styles.signup}>
          <TouchableOpacity onPress={onSignUp}>
            <Text style={styles.greyFont}>
              Don't have an account?<Text style={styles.whiteFont}>  Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </Image>
    )
  }
}

const fields = ['email', 'password']

const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const asyncValidate = (values/*, dispatch */) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        reject({username: 'That username is taken'})
      } else {
        resolve()
      }
    }, 1000) // simulate server latency
  })

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
  signInButton: {
    backgroundColor: '#FF33AA',
    padding: 20,
    alignItems: 'center'
  },
  facebookContainer: {
    paddingTop: 15
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

export default reduxForm({
  form: 'login',
  fields,
  validate,
  asyncValidate,
  asyncBlurFields: ['username']
})(LoginLayout)
