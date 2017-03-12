import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, OverlayTrigger, Button, Popover } from 'react-bootstrap';

const popoverClick = (name) => {
	return (
		<Popover id="popover-trigger-click" title={name}>
			Check this info.
		</Popover>
	)
};

class Moment extends Component {
	render () {
	    let { selectedEventData } = this.props;
		let { name, place, date, start_Time, friendsAttending} = selectedEventData;
		console.log('friendsAttending: ', friendsAttending)
		return (
			<div>
				<div className='moment'>
					name: {name}<br/>
				</div>
				<ButtonToolbar>
					<OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick(name)}>
      					<Button>Click</Button>
   					</OverlayTrigger>
				</ButtonToolbar>	
				<div className='openTable'></div>			
			</div>
        )
	}
}

export default Moment;
