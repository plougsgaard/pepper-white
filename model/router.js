const SET_ROUTE = 'router/SET_ROUTE'

export const ROUTE_LOADING = 'router/ROUTE_LOADING'
export const ROUTE_SIGNIN = 'router/ROUTE_SIGNIN'
export const ROUTE_SIGNUP = 'router/ROUTE_SIGNUP'
export const ROUTE_MAIN = 'router/ROUTE_MAIN'

const initialState = {
  route: ROUTE_LOADING
}

export default router = (state = initialState, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case SET_ROUTE:
      return {
        route: payload
      }
    default:
      return state
  }
}

export const setRoute = (route) => ({
  type: SET_ROUTE,
  payload: route
})
