const LOAD = 'userProfile/LOAD'
const LOAD_SUCCESS = 'userProfile/LOAD_SUCCESS'
const LOAD_FAIL = 'userProfile/LOAD_FAIL'

const initialState = {
  loaded: false
}

export default userProfile = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: payload
      }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: payload
      }
    default:
      return state
  }
}

export const loadUserProfileSuccess = (userProfile) => ({
  type: LOAD_SUCCESS,
  payload: userProfile
})

export const loadUserProfileFail = (reason) => ({
  type: LOAD_FAIL,
  payload: Error(reason)
})

const loadUserProfileFromServer = (token) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const profile = {
        name: 'Thomas',
        age: 29,
        sex: true
      }
      if (!token) {
        reject(loadUserProfileFail('No token supplied'))
      } else {
        resolve(loadUserProfileSuccess(profile))
      }
    }, 2000)
  })

export const loadUserProfile = (token) => ({
  type: LOAD,
  payload: loadUserProfileFromServer(token)
})
