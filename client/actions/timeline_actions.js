import { TOGGLE_EVENT } from './actions'


export const toggleEvent = function(showEvent) {
  return {
    type: TOGGLE_EVENT,
    showEvent
  }
}
