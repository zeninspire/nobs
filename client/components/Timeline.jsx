import React, { Component } from 'react';

import TimeKnots from './TimelineWrapper/TimeKnots'
import fbData from '../reducers/data/fbData'


const kurbickFilms = [{id: 0, name:"Day of the Fight", date: "1951-04-26", img: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Day_of_the_Fight_title.jpg/215px-Day_of_the_Fight_title.jpg"},
  {id: 1, name:"The Seafarers",  date:"1953-10-15", img: "http://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Seafarers_title.jpg/225px-Seafarers_title.jpg"},
  {id: 2, name:"Lolita (1962 film)",   date:"1962-06-13", img: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/LolitaPoster.jpg/215px-LolitaPoster.jpg"},
  {id: 3, name:"Fear and Desire", date:  "1953-03-31", img: "http://upload.wikimedia.org/wikipedia/en/f/f7/Fear_and_Desire_Poster.jpg"},
  {id: 4, name:"Paths of Glory", date: "1957-12-25", img: "http://upload.wikimedia.org/wikipedia/en/thumb/b/bc/PathsOfGloryPoster.jpg/220px-PathsOfGloryPoster.jpg"},
  {id: 5, name:"A Clockwork Orange (film)", date:  "1971-12-19", img: "http://upload.wikimedia.org/wikipedia/en/thumb/4/48/Clockwork_orangeA.jpg/220px-Clockwork_orangeA.jpg"},
  {id: 6, name:"Killer's Kiss", date:  "1955-09-28", img: "http://upload.wikimedia.org/wikipedia/en/thumb/a/a6/KillersKissPoster.jpg/220px-KillersKissPoster.jpg"}
];

class Timeline extends Component {
  componentWillMount () {
    //FB api call should normally be in componentDidMount. However, since we are stubbing the data, we will put it here.
    // this.props.fetchFBData();
  }

  componentDidMount () {
    const $timelineWrapper = document.getElementById("timeline-wrapper");
    TimeKnots.draw("#timeline-wrapper", fbData, {onClick: this.props.toggleEvent, dateFormat: "%B %Y", color: "#696", width:500, showLabels: true, labelFormat: "%Y"})
  }

	render () {
    let { showEvent, toggleEvent, fbEventData } = this.props;
		return (
			<div>
				Reserved for TIMELINE.
		        {showEvent ? <div>POPUP!</div> : null}
            <div id="timeline-wrapper"></div>

			</div>
		)
	}
}

export default Timeline;
