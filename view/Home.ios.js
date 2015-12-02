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

import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../style/base'

import About from './About'

class Home extends Component {
  constructor () {
    super()
  }
  navAbout = () =>
    this.props.navigator.push({
      title: About.title,
      component: About
    })
  render = () => {
    return (
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          onPress={this.navAbout}>
          <Text>Hit me to go a level deeper</Text>
        </TouchableOpacity>
        <Icon.Button name='facebook' backgroundColor="#3b5998" onPress={this.navAbout}>
          Login with Facebook
        </Icon.Button>
      </ScrollView>
    )
  }
}

Home.title = 'Home'

export default Home
