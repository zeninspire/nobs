import React, { Component } from 'react';
// import Countdown from 'react-count-down';
import moment from 'moment';

class Count extends Component {
  render () {
    // let OPTIONS = { endDate: '02/07/2017 11:58 PM', prefix: 'til launch!' };
      // <Countdown options={OPTIONS} />
 
    return (
      <div className="yazclock"></div>     
    )
  }

  componentDidMount () {
    let start = moment();
    let finish = moment([2017,1,7,23,58]); 
    let diff = finish.diff(start, 'seconds');

    $('.yazclock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
    });
  }

}

export default Count;