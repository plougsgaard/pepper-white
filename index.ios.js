import React, {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

class PepperWhite extends Component {
  constructor () {
    super()
  }
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>You are great!</Text>
        <Text style={styles.instructions}>They got nothing on you.</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCCC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 5,
  },
});

AppRegistry.registerComponent('PepperWhite', () => PepperWhite);
