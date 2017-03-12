import { TOGGLE_EVENT, FETCH_FB_DATA, FETCH_OT_DATA, HOVER_EVENT, RECEIVE_OT_DATA } from '../actions/actions';
import fbData from './data/fbData.js'

const initialState = {
  showEvent: false,
  stickEvent: false,
  xPos: 0,
  fbEventData: [],
  selectedEventData: {},
  openTableIsLoading: true,
  openTableData: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_EVENT:
    console.log('xpso', action.xPos);
      return {
        ...state,
        showEvent: action.showEvent,
        selectedEventData: action.eventData,
        xPos: action.xPos
      };
    case HOVER_EVENT: 
      return {
        ...state,
        showEvent: action.showEvent,
        selectedEventData: action.eventData
      };
    case FETCH_FB_DATA:
      return {
        ...state,
        fbEventData: fbData
      }
    case FETCH_OT_DATA:
      return {
        ...state,
        openTableIsLoading: true,
        openTableData: []
      }
    case RECEIVE_OT_DATA:
      return {
        ...state,
        openTableIsLoading: false,
        openTableData: action.data
      }
    default:
      return state;
  }
}
