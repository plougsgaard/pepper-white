import { StyleSheet } from 'react-native'

export const padding = 10

export const rawStyle = {
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
