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
  render = () => (
    <ScrollView style={styles.scrollContainer}>
      <TouchableOpacity
        onPress={this.navAbout}>
        <Text>Hit me to go a level deeper</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

Home.title = 'Home'

export default Home
