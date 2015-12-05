import React, {
  Component,
  PropTypes,
  StyleSheet
} from 'react-native'

import { FBSDKLoginManager, FBSDKLoginButton } from 'react-native-fbsdklogin'

class FacebookButton extends Component {
  constructor () {
    super()
  }
  static propTypes = {
    onLoginFinished: PropTypes.func.isRequired,
    onLogoutFinished: PropTypes.func.isRequired
  }
  render = () => (
    <FBSDKLoginButton
      style={styles.facebookButton}
      onLoginFinished={this.props.onLoginFinished}
      onLogoutFinished={this.props.onLogoutFinished}
      readPermissions={['public_profile', 'email']}
      publishPermissions={[]} />
  )
}

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: '#3366FF',
    padding: 30,
    alignItems: 'center'
  }
})

export default FacebookButton
