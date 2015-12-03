const LOAD = 'userProfile/LOAD'
const LOAD_SUCCESS = 'userProfile/LOAD_SUCCESS'
const LOAD_FAIL = 'userProfile/LOAD_FAIL'

const initialState = []

export default users = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export const addUser = (name) => ({
  type: 'ADD_USER',
  payload: {
    name
  }
})
