import React, { Component } from 'react';
import request from 'superagent'
import { ButtonToolbar, OverlayTrigger, Button, Popover } from 'react-bootstrap';

import moment from 'moment'


class OpenTable extends Component {

  onLoad() {
    let { selectedEventData, fetchOTData, receiveOTData } = this.props;
    let { name, place, date, start_time, friendsAttending, location} = selectedEventData;
    //hit OT endpoint

    let query = {
        start_date_time: moment(start_time._d).format(),
        party_size: friendsAttending ? friendsAttending.length + 1: 2,
        forward_minutes: 120,
        backward_minutes: 30,
        longitude: place ? place.location.longitude : location.longitude,
        latitude: place ? place.location.latitude : location.latitude,
        radius: 1,
        include_unavailable: false
      }

    fetchOTData(query)

    request
      .get('http://localhost:3060/otData')
      .query(query)
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          console.log(JSON.parse(res.text));
          receiveOTData(JSON.parse(res.text))
        }
      })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.selectedEventData.name === this.props.selectedEventData.name && nextProps.openTableIsLoading === true) {
  //     return false
  //   }
  //   return true;
  // }

  // componentDidUpdate () {
  //   // let { openTableIsLoading } = this.props;
  //   // if (openTableIsLoading) {
  //     this.onLoad();
  //   // }
    
  // }

  displayRestaurants (array) {
    var arr = [];
    console.log('array', array);

    for (var i = 0; i < array.length; i++) {
      arr.push(
        <div id={i}><strong>{array[i].name}</strong>&nbsp;&nbsp;<Button style={{"marginLeft": "auto"}} bsSize="small" onClick={()=> window.location = array[0].reservation_url} bsStyle='danger'>6:30pm</Button></div>
        )
    }
    return arr;
  }

  componentDidMount () {
    this.onLoad();
  }

  render () {
    let { openTableIsLoading, openTableData } = this.props;
    return (
      <div>
        {openTableIsLoading ? <img style={{"marginLeft": "50px"}}src="https://www.cinerexparana.com/img/loading.gif"/>: 
        <div>{this.displayRestaurants(openTableData)}</div>}
      </div>
    )
  }
}

export default OpenTable;
