import React, { Component }  from 'react'
import { connect }           from 'react-redux'

import { toggleEvent }          from '../actions/timeline_actions'

// import { startFetch }        from '../actions/action_get_places';
// import { updateListing }     from '../actions/action_single_place';
// import { setMap }            from '../actions/map_action';

import Timeline           from '../components/Timeline.jsx';

const mapStateToProps = (state) => {
  console.log('state', state);
  return state.timeline
  // return {
  //   timeLine: state.timeLine,
  //   mapSet: state.map.mapSet,
  //   mapState: state.map.mapState
  // }
}

const mapDispatchToProps = (dispatch) => ({
  toggleEvent: (showEvent) => {dispatch(toggleEvent(showEvent))}
  // startFetch: () => {dispatch(startFetch())},
  // setMap: (mapState, mapSet) => {dispatch(setMap(mapState, mapSet))},
  // updateListing: (listing) => {dispatch(updateListing(listing))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)
