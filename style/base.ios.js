import { StyleSheet } from 'react-native'
import _ from 'lodash'

import { rawStyle } from './base.js'

const style = _.merge({}, rawStyle, {
  scrollContainer: {
    backgroundColor: 'pink'
  }
})

export default StyleSheet.create(style)
