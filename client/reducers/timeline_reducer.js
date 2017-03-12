import { TOGGLE_EVENT } from '../actions/actions';

const initialState = {

  showEvent: false
};


export default (state = initialState, action) => {


  switch(action.type) {
    case TOGGLE_EVENT:
      return {
        ...state,
        showEvent: action.showEvent
      };
    default:
      return state;
  }
}
