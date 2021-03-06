const initial_state = {
  metamask: false,
}

export default function (state = initial_state, action) {
  switch(action.type) {
    case 'METAMASK_STATUS':
      return {
        ...state,
        metamask: action.payload
      }
    default:
      return state
  }
}
