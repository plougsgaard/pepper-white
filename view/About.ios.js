import React, {
  Component,
  AppRegistry,
  StyleSheet,

  NavigatorIOS,
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../style/base'

class About extends Component {
  constructor () {
    super()
  }
  render = () => (
    <ScrollView style={styles.scrollContainer}>
      <View>
        <Text>Made with a computer.</Text>
      </View>
    </ScrollView>
  )
}

About.title = 'About'

export default About
