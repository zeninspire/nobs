import React, { Component } from 'react';
import fbData from '../reducers/data/fbData';
import TimeKnots from './TimelineWrapper/TimeKnots';
import Moment from './Moment.jsx';

class Timeline extends Component {
  componentWillMount () {
    //FB api call should normally be in componentDidMount. However, since we are stubbing the data, we will put it here.
    // this.props.fetchFBData();
  }

  componentDidMount () {
    const $timelineWrapper = document.getElementById("timeline-wrapper");
    TimeKnots.draw("#timeline-wrapper", fbData, {onHover: this.props.hoverEvent, onClick: this.props.toggleEvent, dateFormat: "%B %Y", color: "#696", width:600, showLabels: true, labelFormat: "%Y"})
  }

	render () {
    let { showEvent, fbEventData, selectedEventData, xPos } = this.props;
		return (
			<div>
            <div id="timeline-wrapper"></div>
            {showEvent ? <Moment selectedEventData={selectedEventData}/> : null}

			</div>
		)
	}
}

export default Timeline;
