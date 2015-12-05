import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import promiseMiddleware from './promiseMiddleware'

import models from '../model/allModels'

const logger = createLogger({
  level: 'info',
  duration: true,
  actionTransformer: (action) => ({
    ...action,
    type: String(action.type)
  })
})

const composition = compose(
  applyMiddleware( promiseMiddleware, logger ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)
const createStoreWithMiddleware = composition(createStore)
const reducer = combineReducers(models)

const store = createStoreWithMiddleware(reducer)

export default store
