export const topbar = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PROGRESS_BAR':
      return Object.assign({}, state, { progressBarStatus: action.isOpen })
    default:
     return state
  }
}
  
export default topbar
