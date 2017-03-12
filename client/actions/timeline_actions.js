import { TOGGLE_EVENT, FETCH_FB_DATA, HOVER_EVENT, FETCH_OT_DATA, RECEIVE_OT_DATA} from './actions'
import request from 'superagent'

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

export const fetchOTData = function() {
  return {
    type: FETCH_OT_DATA
  }
}

export const receiveOTData = function(data) {
  // dispatch => {
  //   dispatch(getOTData());
  //   request
  //     .get('http://localhost:3060/otData')
  //     .query(query)
  //     .end((err, res) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         let response = JSON.parse(res.text);
  //         console.log(response);
  //         dispatch(receiveOTData(response))
  //         // fetchOTData(JSON.parse(res.text))
  //       }
  //     })
  // }
  return {
    type: RECEIVE_OT_DATA,
    data
  }
}

// export const receiveOTData = function(data) {
//   return {
//     type: RECEIVE_OT_DATA,
//     data
//   }
// }
