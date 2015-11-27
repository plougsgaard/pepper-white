import React, {
  Component,
  AppRegistry,
  StyleSheet,

  NavigatorIOS,
  ScrollView,
  Text,
  View
} from 'react-native'

import App from './view/App'

class PepperWhite extends Component {
  constructor () {
    super()
  }
  render = () => <App />
}

AppRegistry.registerComponent('PepperWhite', () => PepperWhite)
