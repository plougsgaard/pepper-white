const LOAD = 'userProfile/LOAD'
const LOAD_SUCCESS = 'userProfile/LOAD_SUCCESS'
const LOAD_FAIL = 'userProfile/LOAD_FAIL'

const initialState = {
  loaded: false
}

export default userProfile = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD:
      console.log('LOAD')
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      console.log('LOAD_SUCCESS')
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.payload
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      }
    default:
      return state
  }
}

var fn = () =>
  new Promise(function(resolve, reject) {
    console.log('fn:resolve')
    setTimeout(() => {
      resolve({
        type: LOAD_SUCCESS,
        payload: { name: 'derp' }
      })
    }, 5000)
  });

var fn2 = async function () {
  const result = await new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({
        type: LOAD_SUCCESS,
        payload: { name: 'Horray' }
      })
    }, 10000)
  })
  return result
}

export const loadUserProfile = () => ({
  type: LOAD,
  payload: fn2()
})
