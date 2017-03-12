import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOTData, getOTData, receiveOTData } from '../actions/timeline_actions'


import OpenTable from '../components/OpenTable.jsx';

const mapStateToProps = (state) => {
  // return state.timeline
  return {
    selectedEventData: state.timeline.selectedEventData,
    openTableIsLoading: state.timeline.openTableIsLoading
  }
  // return {
  //   timeLine: state.timeLine,
  //   mapSet: state.map.mapSet,
  //   mapState: state.map.mapState
  // }
}

const mapDispatchToProps = (dispatch) => ({
  receiveOTData: (data) => {dispatch(receiveOTData(data))},
  fetchOTData: () => {dispatch(fetchOTData())}
  // toggleEvent: (showEvent, eventData) => {dispatch(toggleEvent(showEvent, eventData))},
  // fetchFBData: () => {dispatch(fetchFBData())}
  // startFetch: () => {dispatch(startFetch())},
  // setMap: (mapState, mapSet) => {dispatch(setMap(mapState, mapSet))},
  // updateListing: (listing) => {dispatch(updateListing(listing))}
})

export default connect(mapStateToProps, mapDispatchToProps)(OpenTable)
