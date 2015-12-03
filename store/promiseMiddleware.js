import _ from 'lodash'

const isPromise = (val) => val && typeof val.then === 'function'

const isFluxStandardAction = (action) => typeof action.type !== 'undefined'

const promiseMiddleware = ({ dispatch }) =>
  (next) =>
    (action) =>
      isPromise(action.payload)
        ? next(action) && action.payload.then(
            (result) => isFluxStandardAction(result)
              ? dispatch(result)
              : dispatch({ ...action, payload: result }),
            (error) =>
              dispatch({ ...action, payload: error, error: true })
          )
        : next(action)

export default promiseMiddleware
