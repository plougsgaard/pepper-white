import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import models from '../model/allModels'

const composition = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const createStoreWithMiddleware = composition(createStore)
const reducer = combineReducers(models)

const store = createStoreWithMiddleware(reducer)

export default store
