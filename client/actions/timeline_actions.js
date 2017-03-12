import { TOGGLE_EVENT, FETCH_FB_DATA, HOVER_EVENT } from './actions'


export const toggleEvent = function(showEvent, eventData = {}, xPos = 0) {
  return {
    type: TOGGLE_EVENT,
    showEvent,
    eventData,
    xPos
  }
}

export const hoverEvent = function(showEvent, eventData = {}) {
  return {
    type: HOVER_EVENT,
    showEvent,
    eventData
  }
}

//TODO: un-stub this and make it async. Will need to add a second reducer
export const fetchFBData = function() {
  return {
    type: FETCH_FB_DATA,
  }
}
