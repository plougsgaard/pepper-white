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

import { Provider } from 'react-redux/native' // track https://github.com/facebook/react-native/issues/2985
import store from '../store/store'

import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from '../style/base'

import Home from './Home'
import Login from './Login'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'status',
      iconFlame: null,
      iconBarcode: null
    }
  }
  componentWillMount = () => {
    // hack required by TabBarIOS
    Ionicons.getImageSource('ios-barcode', 30).then((iconBarcode) => this.setState({ iconBarcode }))
    Ionicons.getImageSource('ios-flame', 30).then((iconFlame) => this.setState({ iconFlame }))
  }
  canRender = () => {
    const { iconFlame, iconBarcode } = this.state
    return iconFlame && iconBarcode
  }
  render = () => {
    const { iconFlame, iconBarcode, selectedTab, token } = this.state
    if (!this.canRender()) {
      return false
    }
    if (!token) {
      return (
        <Login />
      )
    }
    return (
      <TabBarIOS>
        <Ionicons.TabBarItem
          title="Status"
          iconName='ios-flame'
          selected={selectedTab === 'status'}
          onPress={() => this.setState({ selectedTab: 'status' })}>
          <NavigatorIOS
            style={styles.navigatorContainer}
            initialRoute={{ title: Home.title, component: Home }}/>
        </Ionicons.TabBarItem>
        <Ionicons.TabBarItem
          title="Scan"
          iconName='ios-barcode'
          selected={selectedTab === 'scan'}
          onPress={() => this.setState({ selectedTab: 'scan' })}>
          <NavigatorIOS
            style={styles.navigatorContainer}
            initialRoute={{ title: Home.title, component: Home }}/>
        </Ionicons.TabBarItem>
      </TabBarIOS>
    )
  }
}

class AppProvider extends Component {
  constructor () {
    super()
  }
  render = () => (
    <Provider store={store}>
      {() => <App />}
    </Provider>
  )
}

export default AppProvider
