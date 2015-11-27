import React, {
  Component,
  AppRegistry,
  StyleSheet,

  TabBarIOS,
  NavigatorIOS,
  ScrollView,
  Text,
  View
} from 'react-native'

import styles from '../style/base'

import Home from './Home'

class App extends Component {
  constructor () {
    super()
  }
  render = () =>
    <TabBarIOS>
      <TabBarIOS.Item
        selected={true}
        systemIcon={'search'}>
        <NavigatorIOS
          style={styles.navigatorContainer}
          initialRoute={{ title: Home.title, component: Home }}/>
      </TabBarIOS.Item>
    </TabBarIOS>
}

export default App
