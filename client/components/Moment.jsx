import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonToolbar, OverlayTrigger, Button, Popover } from 'react-bootstrap';

import OpenTable from '../containers/OpenTable_container';

const popoverClick = (name) => {
	return (
		<Popover id="popover-trigger-click" title={name}>
			Check this info.
		</Popover>
	)
};

class Moment extends Component {
	render () {
	    let { selectedEventData, xPos } = this.props;

		let { name, place, start_time, friendsAttending} = selectedEventData;
		let friendsGoing = [];
		if (friendsAttending) {
			for (var i = 0; i < friendsAttending.length; i++) {
				friendsGoing.push(friendsAttending[i].name)
			}
		};
		console.log('xpos', xPos);
		return (
			<div className='moment'>
				<Popover
					id={name}
					placement="bottom"
					positionLeft={xPos}
					positionTop={200}
					title={name}
					>
					<strong>Time:</strong> {start_time._i} <br/>
					<strong>Location:</strong> {place ? place.name+', '+place.location.street+', '+place.location.city : 'San Francisco'} <br/>
					<strong>Friends attending:</strong> {friendsGoing.length>0 ? friendsGoing.join(', ') : <Button bsSize="small" bsStyle='info'>Invite Friends</Button>} <br/>
					<hr/>
					<div className='openTable'>
						<OpenTable/>
					</div>
				</Popover>

			</div>
        )
	}
}

export default Moment;
