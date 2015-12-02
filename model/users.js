export const addUser = (name) => ({
  type: 'ADD_USER',
  haul: {
    name
  }
})

export default users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.haul
      ]
    default:
      return state
  }
}
