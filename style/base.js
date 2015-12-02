import { StyleSheet } from 'react-native'

export const padding = 10

export const rawStyle = {
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigatorContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'blue',
    padding: padding
  }
}

export default StyleSheet.create(rawStyle)
