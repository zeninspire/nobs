import { TOGGLE_EVENT, FETCH_FB_DATA } from './actions'


export const toggleEvent = function(showEvent) {
  return {
    type: TOGGLE_EVENT,
    showEvent
  }
}

//TODO: un-stub this and make it async. Will need to add a second reducer
export const fetchFBData = function() {
  return {
    type: FETCH_FB_DATA,
  }
}
