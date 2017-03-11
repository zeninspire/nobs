export default function mainReducer (state = [], action) {
  switch(action.type) {
    case 'MAIN_STATE':
      return [
          ...state
        ]
    default:
      return state;
  }
}
