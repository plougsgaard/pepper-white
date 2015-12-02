import { connect } from 'react-redux/native'

const connectToStore = (component) =>
  connect(component.mapState, component.mapProps)(component)

export default connectToStore
